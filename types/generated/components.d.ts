import type { Schema, Struct } from '@strapi/strapi';

export interface HotelDetailsFaetures extends Struct.ComponentSchema {
  collectionName: 'components_hotel_details_faetures';
  info: {
    displayName: 'faetures';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hotel-details.faetures': HotelDetailsFaetures;
    }
  }
}
