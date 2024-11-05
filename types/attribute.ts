export interface Attribute {
  id: number;
  attribute_id?: number | null;
  value?: string;
  position?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  attribute_product_values_count?: number | null;
  name?: string;
}

export interface AttributeOption {
  id: number;
  name: string;
  is_multiple?: number;
  created_at?: string | null;
  updated_at?: string | null;
  value_name?: Array<string> | null;
  values?: Array<Attribute>;
}

export interface AttributeFilterOption {
  label?: string;
  value?: string;
  color_hex?: string;
  position?: number;
}

export interface AttributeFilter {
  label?: string;
  name?: string;
  values?: Array<AttributeFilterOption>;
}
