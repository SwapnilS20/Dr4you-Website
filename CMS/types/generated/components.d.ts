import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'items.navbar-items': ItemsNavbarItems;
    }
  }
}
