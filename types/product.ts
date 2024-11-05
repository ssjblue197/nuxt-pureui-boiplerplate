import type { Paginate } from '@/types/common';

export interface ProductSizeChartOption {
  [key: string]: number;
}

export interface ProductSizeChart {
  [key: string]: ProductSizeChartOption;
}

export interface ProductBrand {
  id?: number;
  name?: string;
  slug?: string;
  logo?: string;
  thumbnail?: string;
  description?: string;
}

export interface GangSheetCreate {
  size?: string;
  quantity?: number;
}

export interface ProductOption {
  id?: number;
  type?: 'size' | 'color' | 'precut';
  option_name?: string;
  values?: Array<ProductOptionAttribute>;
  value?: ProductOptionAttribute;
}

export interface ProductCustom {
  type?: 'image' | 'text' | 'checkbox';
  is_required?: 0 | 1;
  placeholder?: string;
  label?: string;
  description?: string;
}

export interface ProductOptionAttribute {
  id?: number;
  attribute_name?: string;
  name?: string;
  sku?: string;
  type?: string;
  color_hex?: string;
  color_texture?: string;
  color_hex_default?: string;
  color_texture_default?: string;
  is_default?: boolean;
  option_id?: number;
}

export interface ProductAdditionalInfo {
  title?: string;
  description?: string;
}

export interface ProductMedia {
  id?: number;
  image?: string;
  type?: 'image' | 'video' | 'print_area_guide_image';
  thumbnail_url?: string;
  option_id?: number | null;
  option?: ProductOptionAttribute;
  full_url?: string;
}

export interface ProductVariant {
  id?: Number;
  sku?: string;
  vendor_sku?: string | null;
  name?: string | null;
  option_1?: string | null;
  option_2?: string | null;
  option_3?: string | null;
  cost?: number | null;
  retail_price?: number;
  profit?: number | null;
  margin?: number | null;
  is_stock?: boolean;
}

export interface Product {
  id?: number;
  name?: string;
  sku?: string;
  description?: string;
  type?: string;
  is_popular?: boolean;
  is_active?: boolean;
  is_hot?: boolean;
  created_at?: string;
  updated_at?: string;
  slug?: string;
  pivot: {
    collection_id?: number;
    product_id?: number;
  };
  variants?: Array<ProductVariant>;
  variant: ProductVariant;
  medias?: Array<ProductMedia>;
  information?: Array<ProductAdditionalInfo>;
  options?: Array<ProductOption>;
  customs?: Array<ProductCustom>;
  price?: number | string;
  brand?: ProductBrand;
  size_chart?: {
    data?: ProductSizeChart;
  };
  size_chart_image?: string;
  size_chart_guide?: any;
  style?: string;
  production_time?: string;
  attributes?: Array<any>;
  spec?: any;
}
export interface ProductFilter {
  [key: string]: string | number | boolean | Array<string> | any;
}
