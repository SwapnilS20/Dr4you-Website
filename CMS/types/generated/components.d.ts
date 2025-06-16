import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
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
  };
}

export interface ItemsNavbarItems extends Struct.ComponentSchema {
  collectionName: 'components_items_navbar_items';
  info: {
    displayName: 'navbar_items';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
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
    displayName: 'social_media_icon_links';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'items.navbar-items': ItemsNavbarItems;
      'shared.link': SharedLink;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
    }
  }
}
