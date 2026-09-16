import nodemailer, { Transporter } from "nodemailer";
import { env } from "@strapi/utils";
type DomainTransporters = Record<string, Transporter>;

const domainsData: DomainTransporters = {
  "arventa.ch": nodemailer.createTransport({
    host: "server.arventa.us",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: "mail@arventa.ch",
      pass: env("SMTP_PASSWORD_2"),
    },
    requireTLS: true,
    tls: {
      rejectUnauthorized: false,
    },
  }),

  "arventa.us": nodemailer.createTransport({
    host: "server.arventa.us",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: "mail@arventa.us",
      pass: env("SMTP_PASSWORD_2"),
    },
    requireTLS: true,
    tls: {
      rejectUnauthorized: false,
    },
  }),
  "arventa.net": nodemailer.createTransport({
    host: "server.arventa.us",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: "mail@arventa.net",
      pass: env("SMTP_PASSWORD_2"),
    },
    requireTLS: true,
    tls: {
      rejectUnauthorized: false,
    },
  }),
  "ar-venta.de": nodemailer.createTransport({
    host: "smtp.gmail.com", // Your SMTP server
    port: 465, // Usually 587, 465, or 25
    secure: true, // true for port 465, false for 587/25
    auth: {
      user: env("SMTP_USERNAME"),
      pass: env("SMTP_PASSWORD"),
    },
  }),
  localhost: nodemailer.createTransport({
    host: "smtp.gmail.com", // Your SMTP server
    port: 465, // Usually 587, 465, or 25
    secure: true, // true for port 465, false for 587/25
    auth: {
      user: env("SMTP_USERNAME"),
      pass: env("SMTP_PASSWORD"),
    },
  }),
};

export const getTransporter = (domain: string): Transporter | undefined => {
  return domainsData[domain];
};
