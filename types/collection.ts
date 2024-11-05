import type { Product } from '@/types/product';
import type { Attribute } from '~/types/attribute';

export interface Collection {
  description?: string;
  full_url?: string;
  thumbnail_url?: string;
  id?: number;
  name?: string;
  position?: number;
  products: Array<Product>;
  slug?: string | null;
  created_at?: string;
  updated_at?: string;
  url?: string;
}

export interface Filter {
  [key: string]: string | number | boolean | Array<string | number>;
}

export interface CollectionDetail {
  products?: Array<Product>;
  attributes?: Array<Attribute>;
}
