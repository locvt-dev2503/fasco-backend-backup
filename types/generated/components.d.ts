import type { Schema, Struct } from '@strapi/strapi';

export interface ColorsColors extends Struct.ComponentSchema {
  collectionName: 'components_colors_colors';
  info: {
    displayName: 'colors';
  };
  attributes: {
    code: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SizesSizes extends Struct.ComponentSchema {
  collectionName: 'components_sizes_sizes';
  info: {
    displayName: 'sizes';
  };
  attributes: {
    size: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'colors.colors': ColorsColors;
      'sizes.sizes': SizesSizes;
    }
  }
}
