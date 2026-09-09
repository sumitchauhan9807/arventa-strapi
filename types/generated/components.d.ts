import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBlockDescriptionBasic extends Struct.ComponentSchema {
  collectionName: 'components_common_block_description_basics';
  info: {
    displayName: 'Block Description Basic';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface CommonBlockDescriptionParah extends Struct.ComponentSchema {
  collectionName: 'components_common_block_description_parahs';
  info: {
    displayName: 'Block Description Parah';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface CommonContactForm extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
  };
}

export interface CommonCountUpSection extends Struct.ComponentSchema {
  collectionName: 'components_common_count_up_sections';
  info: {
    displayName: 'Count Up Section';
  };
  attributes: {
    countUpSection: Schema.Attribute.Component<'dynamic-zone.count-up', true>;
  };
}

export interface CommonCta1 extends Struct.ComponentSchema {
  collectionName: 'components_common_cta_1s';
  info: {
    displayName: 'CTA1';
  };
  attributes: {
    blockDescription: Schema.Attribute.Component<
      'common.block-description-parah',
      false
    >;
    bottomText1: Schema.Attribute.String;
    bottomText2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonDescLists extends Struct.ComponentSchema {
  collectionName: 'components_common_desc_lists';
  info: {
    displayName: 'descLists';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    svg: Schema.Attribute.Text;
    tags: Schema.Attribute.String;
  };
}

export interface CommonDescriptionLists extends Struct.ComponentSchema {
  collectionName: 'components_common_description_lists';
  info: {
    displayName: 'Description Lists';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
    layoutType: Schema.Attribute.Enumeration<
      ['SVG', 'BLACK_BACKGROUND', 'NUMBERED', 'TAGGED_LISTS']
    >;
    lists: Schema.Attribute.Component<'common.desc-lists', true>;
  };
}

export interface CommonFaq extends Struct.ComponentSchema {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
    qna: Schema.Attribute.Component<'common.qna', true>;
  };
}

export interface CommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
    button1: Schema.Attribute.Component<'common.button', false>;
    button2: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface CommonLists extends Struct.ComponentSchema {
  collectionName: 'components_common_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CommonNetworkComponent extends Struct.ComponentSchema {
  collectionName: 'components_common_network_components';
  info: {
    displayName: 'Network Component';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
  };
}

export interface CommonProductsLists extends Struct.ComponentSchema {
  collectionName: 'components_common_products_lists';
  info: {
    displayName: 'Products Lists';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
    boldText: Schema.Attribute.String;
    button: Schema.Attribute.Component<'common.button', false>;
    text: Schema.Attribute.String;
  };
}

export interface CommonProductsSection extends Struct.ComponentSchema {
  collectionName: 'components_common_products_sections';
  info: {
    displayName: 'Products Section';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
    proudctsLists: Schema.Attribute.Component<'common.products-lists', true>;
  };
}

export interface CommonQna extends Struct.ComponentSchema {
  collectionName: 'components_common_qnas';
  info: {
    displayName: 'qna';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface CommonServicesList extends Struct.ComponentSchema {
  collectionName: 'components_common_services_lists';
  info: {
    displayName: 'Services List';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    heading: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'common.lists', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface CommonServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_common_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    blockHeading: Schema.Attribute.Component<
      'common.block-description-basic',
      false
    >;
    serviceLists: Schema.Attribute.Component<'common.services-list', true>;
  };
}

export interface DynamicZoneCountUp extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_count_ups';
  info: {
    displayName: 'Count Up';
  };
  attributes: {
    afterCountText: Schema.Attribute.String;
    beforeCountText: Schema.Attribute.String;
    count: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface FooterContactNumber extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_numbers';
  info: {
    displayName: 'contactNumber';
  };
  attributes: {
    flag: Schema.Attribute.String;
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FooterFooterCallUs extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_calluses';
  info: {
    displayName: 'footerCallUs';
  };
  attributes: {
    contactNumber: Schema.Attribute.Component<'footer.contact-number', true>;
    heading: Schema.Attribute.String;
  };
}

export interface FooterFooterLists extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_lists';
  info: {
    displayName: 'Footer Lists';
  };
  attributes: {
    heading: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'footer.lists', true>;
  };
}

export interface FooterFooterOffices extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_offices';
  info: {
    displayName: 'Footer Offices';
  };
  attributes: {
    heading: Schema.Attribute.String;
    offices: Schema.Attribute.Component<'footer.offices', true>;
  };
}

export interface FooterFooterTop extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_tops';
  info: {
    displayName: 'Footer Top';
  };
  attributes: {
    address: Schema.Attribute.Text;
  };
}

export interface FooterLists extends Struct.ComponentSchema {
  collectionName: 'components_footer_lists';
  info: {
    displayName: 'lists';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface FooterOffices extends Struct.ComponentSchema {
  collectionName: 'components_footer_offices';
  info: {
    displayName: 'offices';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'common.block-description-basic': CommonBlockDescriptionBasic;
      'common.block-description-parah': CommonBlockDescriptionParah;
      'common.button': CommonButton;
      'common.contact-form': CommonContactForm;
      'common.count-up-section': CommonCountUpSection;
      'common.cta-1': CommonCta1;
      'common.desc-lists': CommonDescLists;
      'common.description-lists': CommonDescriptionLists;
      'common.faq': CommonFaq;
      'common.hero': CommonHero;
      'common.lists': CommonLists;
      'common.network-component': CommonNetworkComponent;
      'common.products-lists': CommonProductsLists;
      'common.products-section': CommonProductsSection;
      'common.qna': CommonQna;
      'common.services-list': CommonServicesList;
      'common.services-section': CommonServicesSection;
      'dynamic-zone.count-up': DynamicZoneCountUp;
      'footer.contact-number': FooterContactNumber;
      'footer.footer-call-us': FooterFooterCallUs;
      'footer.footer-lists': FooterFooterLists;
      'footer.footer-offices': FooterFooterOffices;
      'footer.footer-top': FooterFooterTop;
      'footer.lists': FooterLists;
      'footer.offices': FooterOffices;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
