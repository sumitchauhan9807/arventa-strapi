import type { Core } from "@strapi/strapi";
import fs from "fs";
import path from "path";

type RecaptchaResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};
const escapeHtml = (value: unknown): string => {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};
const verifyCaptcha = async (token: string): Promise<RecaptchaResponse> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("RECAPTCHA_SECRET_KEY is not configured");
  }
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    },
  );
  if (!response.ok) {
    throw new Error(
      `reCAPTCHA verification request failed: ${response.status}`,
    );
  }
  const captchaResult = (await response.json()) as RecaptchaResponse;
  return captchaResult;
};

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async send(ctx: any) {
    const {
      areaOfIntrest,
      company,
      email,
      message,
      mobile,
      name,
      phone,
      surname,
      captchaToken,
    } = ctx.request.body ?? {};

    // Validation
    if (
      !areaOfIntrest ||
      !company ||
      !email ||
      !message ||
      !mobile ||
      !name ||
      !phone ||
      !surname
    ) {
      return ctx.badRequest(
        "Area of interest, company, email, message, mobile, name, surname and phone are required.",
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(String(email))) {
      return ctx.badRequest("Please provide a valid email address.");
    }

    if (!captchaToken) {
      return ctx.badRequest("Please complete the reCAPTCHA verification.");
    }
    const captchaResult = await verifyCaptcha(captchaToken);

    if (!captchaResult.success) {
      strapi.log.warn("reCAPTCHA failed:", captchaResult["error-codes"]);

      return ctx.badRequest("reCAPTCHA verification failed.");
    }

    const emailSettings = await strapi
      .documents("api::email-setting.email-setting")
      .findFirst();
    if (!emailSettings?.toEmail) {
      throw new Error("Admin email is not configured");
    }

    try {
      // -----------------------------------------
      // Load HTML template
      // -----------------------------------------

      const templatePath = path.join(
        process.cwd(),
        "src",
        "emails",
        "contact-enquiry.html",
      );

      let html = fs.readFileSync(templatePath, "utf8");

      // -----------------------------------------
      // Replace template variables
      // -----------------------------------------

      const variables: Record<string, string> = {
        areaOfIntrest: escapeHtml(areaOfIntrest),
        company: escapeHtml(company),
        email: escapeHtml(email),
        message: escapeHtml(message).replace(/\n/g, "<br />"),
        mobile: escapeHtml(mobile),
        name: escapeHtml(name),
        phone: escapeHtml(phone),
        surname: escapeHtml(surname),
        year: String(new Date().getFullYear()),
      };

      Object.entries(variables).forEach(([key, value]) => {
        html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
      });

      // -----------------------------------------
      // Plain text fallback
      // -----------------------------------------

      const text = `
NEW ENQUIRY - AR VENTA

CONTACT DETAILS
--------------------------------

Name: ${name} ${surname}
Company: ${company}
Email: ${email}
Mobile: ${mobile}
Phone: ${phone}
Area of Interest: ${areaOfIntrest}

MESSAGE
--------------------------------

${message}

--------------------------------

Reply to: ${email}

AR Venta
      `.trim();

      // -----------------------------------------
      // Send email
      // -----------------------------------------

      await strapi
        .plugin("email")
        .service("email")
        .send({
          // to: "sumitchauhan9807666@gmail.com",
          from: "AR Venta <mail@ar-venta.de>",
          to: emailSettings.toEmail,
          cc: emailSettings.ccEmail || undefined,
          replyTo: email,
          subject: `New enquiry - ${areaOfIntrest}`,
          text,
          html,
        });

      return ctx.send({
        success: true,
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      strapi.log.error("Contact form email failed:", error);

      return ctx.internalServerError("Unable to send your message.");
    }
  },
});

export default controller;
