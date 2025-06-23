import type { Schema, Struct } from '@strapi/strapi';

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

export interface ItemsHeroItemsStats extends Struct.ComponentSchema {
  collectionName: 'components_items_hero_items_stats';
  info: {
    displayName: 'Hero_items_stats';
  };
  attributes: {
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
    sequence: Schema.Attribute.Integer;
    slug: Schema.Attribute.String;
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
      'dynamic-zone.hero-section': DynamicZoneHeroSection;
      'dynamic-zone.welcome-banner': DynamicZoneWelcomeBanner;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'items.hero-items-stats': ItemsHeroItemsStats;
      'items.navbar-items': ItemsNavbarItems;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
    }
  }
}
