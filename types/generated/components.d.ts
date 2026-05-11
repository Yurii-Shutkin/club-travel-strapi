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

export interface HotelInfoFeatureBlock extends Struct.ComponentSchema {
  collectionName: 'components_hotel_info_feature_blocks';
  info: {
    displayName: 'FeatureBlock';
  };
  attributes: {
    entries: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDescriptions extends Struct.ComponentSchema {
  collectionName: 'components_sections_descriptions';
  info: {
    displayName: 'descriptions';
  };
  attributes: {
    description: Schema.Attribute.Text;
    mainDescription: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hotel-details.faetures': HotelDetailsFaetures;
      'hotel-info.feature-block': HotelInfoFeatureBlock;
      'sections.descriptions': SectionsDescriptions;
    }
  }
}
