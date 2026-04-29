import type { Schema, Struct } from '@strapi/strapi';

export interface HotelDetailsFaetures extends Struct.ComponentSchema {
  collectionName: 'components_hotel_details_faetures';
  info: {
    displayName: 'faetures';
  };
  attributes: {
    title: Schema.Attribute.String;
    values: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hotel-details.faetures': HotelDetailsFaetures;
    }
  }
}
