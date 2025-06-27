import type { Schema, Struct } from '@strapi/strapi';

export interface CardContactCard extends Struct.ComponentSchema {
  collectionName: 'components_card_contact_cards';
  info: {
    displayName: 'Contact-Card';
  };
  attributes: {
    details: Schema.Attribute.String;
    remixicon_classname: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardPromiseCard extends Struct.ComponentSchema {
  collectionName: 'components_card_promise_cards';
  info: {
    displayName: '3-item-card';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardWhyChooseUsCard extends Struct.ComponentSchema {
  collectionName: 'components_card_why_choose_us_cards';
  info: {
    displayName: 'Why-Choose-Us-Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    remixicon_classname: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_contact_infos';
  info: {
    displayName: 'Contact-Info';
  };
  attributes: {
    google_map_embed_src: Schema.Attribute.String;
  };
}

export interface DynamicZoneDoctorsCardSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_doctors_card_sections';
  info: {
    displayName: 'doctors_card_section';
  };
  attributes: {
    doctors: Schema.Attribute.Relation<'oneToMany', 'api::doctor.doctor'>;
    sectionhead: Schema.Attribute.Component<'shared.page-head', false>;
  };
}

export interface DynamicZoneDrs4YouStory extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_drs4you_stories';
  info: {
    displayName: 'Drs4you Story';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    highlighting_head: Schema.Attribute.String;
    normal_head: Schema.Attribute.String;
    story_description: Schema.Attribute.Text;
    story_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface DynamicZoneHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_hero_sections';
  info: {
    displayName: 'Hero-section';
  };
  attributes: {
    contact_number: Schema.Attribute.String;
    CTAs: Schema.Attribute.Component<'shared.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    description: Schema.Attribute.Text;
    doctor_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    highlighting_text: Schema.Attribute.String;
    on_image_text_1: Schema.Attribute.String;
    on_image_text_2: Schema.Attribute.String;
    our_rating_outof5: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    our_stats: Schema.Attribute.Component<'items.hero-items-stats', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    tagline: Schema.Attribute.String;
  };
}

export interface DynamicZoneOurMission extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_our_missions';
  info: {
    displayName: 'Our-Mission';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface DynamicZoneOurVision extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_our_visions';
  info: {
    displayName: 'Our-Vision';
  };
  attributes: {
    title: Schema.Attribute.String;
    vision: Schema.Attribute.Blocks;
  };
}

export interface DynamicZonePlatformWorking extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_platform_workings';
  info: {
    displayName: 'Platform-Working';
  };
  attributes: {
    description: Schema.Attribute.String;
    platform_steps: Schema.Attribute.Component<'items.platform-items', true>;
    working_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface DynamicZonePromiseSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_promise_sections';
  info: {
    displayName: 'promise_section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    promise_items: Schema.Attribute.Component<'card.promise-card', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneRequestAppointmentForm
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_request_appointment_forms';
  info: {
    displayName: 'Request-Appointment-Form';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    form_button_text: Schema.Attribute.String;
    form_head: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneServicesCardSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_services_card_sections';
  info: {
    displayName: 'Services_card_section';
  };
  attributes: {
    sectionhead: Schema.Attribute.Component<'shared.page-head', false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface DynamicZoneWelcomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_welcome_banners';
  info: {
    displayName: 'Welcome-Banner';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    patient_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    placeholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whatsapp_number: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
  };
}

export interface DynamicZoneWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_why_choose_uses';
  info: {
    displayName: 'Why-Choose-Us';
  };
  attributes: {
    doctor_image: Schema.Attribute.Media<'images' | 'files'>;
    on_image_percentage: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
    title_line1: Schema.Attribute.String;
    title_line2: Schema.Attribute.String;
    Why_Choose_Items: Schema.Attribute.Component<
      'card.why-choose-us-card',
      true
    >;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.String;
    links_title_1: Schema.Attribute.String;
    links_title_2: Schema.Attribute.String;
    links_title_3: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
    services_links: Schema.Attribute.Component<'shared.link', true>;
    social_icons: Schema.Attribute.Component<
      'shared.social-media-icon-links',
      true
    >;
    support: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Navbar_Items: Schema.Attribute.Component<'items.navbar-items', true>;
    patient_redirection: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface ItemsDoctorDetails extends Struct.ComponentSchema {
  collectionName: 'components_items_doctor_details';
  info: {
    displayName: 'Doctor_Details';
  };
  attributes: {
    doctor_qualification: Schema.Attribute.Component<
      'shared.doctor-qualification',
      true
    >;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ItemsHeroItemsStats extends Struct.ComponentSchema {
  collectionName: 'components_items_hero_items_stats';
  info: {
    displayName: 'Hero_items_stats';
  };
  attributes: {
    span: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    value: Schema.Attribute.BigInteger;
  };
}

export interface ItemsNavbarItems extends Struct.ComponentSchema {
  collectionName: 'components_items_navbar_items';
  info: {
    displayName: 'Navbar_items';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    remixicon_classname: Schema.Attribute.String;
  };
}

export interface ItemsPlatformItems extends Struct.ComponentSchema {
  collectionName: 'components_items_platform_items';
  info: {
    displayName: 'platform_items';
  };
  attributes: {
    step_description: Schema.Attribute.String;
    step_head: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedDoctorQualification extends Struct.ComponentSchema {
  collectionName: 'components_shared_doctor_qualifications';
  info: {
    displayName: 'doctor_qualification';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedPageHead extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_heads';
  info: {
    displayName: '2-items-head';
  };
  attributes: {
    short_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialMediaIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_icon_links';
  info: {
    displayName: 'Social_media_icon_links';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    remixicon_classname: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.contact-card': CardContactCard;
      'card.promise-card': CardPromiseCard;
      'card.why-choose-us-card': CardWhyChooseUsCard;
      'dynamic-zone.contact-info': DynamicZoneContactInfo;
      'dynamic-zone.doctors-card-section': DynamicZoneDoctorsCardSection;
      'dynamic-zone.drs4you-story': DynamicZoneDrs4YouStory;
      'dynamic-zone.hero-section': DynamicZoneHeroSection;
      'dynamic-zone.our-mission': DynamicZoneOurMission;
      'dynamic-zone.our-vision': DynamicZoneOurVision;
      'dynamic-zone.platform-working': DynamicZonePlatformWorking;
      'dynamic-zone.promise-section': DynamicZonePromiseSection;
      'dynamic-zone.request-appointment-form': DynamicZoneRequestAppointmentForm;
      'dynamic-zone.services-card-section': DynamicZoneServicesCardSection;
      'dynamic-zone.welcome-banner': DynamicZoneWelcomeBanner;
      'dynamic-zone.why-choose-us': DynamicZoneWhyChooseUs;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'items.doctor-details': ItemsDoctorDetails;
      'items.hero-items-stats': ItemsHeroItemsStats;
      'items.navbar-items': ItemsNavbarItems;
      'items.platform-items': ItemsPlatformItems;
      'shared.button': SharedButton;
      'shared.doctor-qualification': SharedDoctorQualification;
      'shared.link': SharedLink;
      'shared.page-head': SharedPageHead;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
    }
  }
}
