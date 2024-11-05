export interface CartItemImage {
  id?: number;
  url?: string;
  thumbnail_url?: string;
}

export interface CartItemVariant extends ProductVariant {
  product?: Product;
}

export interface CartItem {
  sku?: string;
  quantity?: number;
  type?: string;
  url?: string;
  id?: number;
  unit_price?: number;
  images?: CartItemImage[];
  variant?: CartItemVariant;
  note?: string;
}

export interface Address {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  city?: string;
  state?: string;
  country?: string;
  zipcode?: string;
  address_1?: string;
  address_2?: string;
  order_id?: number;
}

export interface Tax {
  amount_total?: number;
  currency?: string;
  expires_at?: number;
  id?: string;
  object?: string;
  tax_amount_exclusive?: number;
  tax_amount_inclusive?: number;
  livemode?: boolean;
  shipping_cost?: {
    amount?: number;
    amount_tax?: number;
    tax_behavior?: string;
    tax_code?: string;
  };
  tax_breakdown?: {
    amount?: number;
    inclusive?: boolean;
    taxability_reason?: string;
    taxable_amount?: number;
    tax_rate_details?: {
      country?: string;
      percentage_decimal?: string;
      state?: string;
      tax_type?: string;
    };
  }[];
  tax_date?: number;
}

export interface Cart {
  token?: string;
  shipping_method_id?: number;
  items?: CartItem[];
  address?: Address;
  billing_address?: Address;
  shipping_address?: Address;
  total_items?: number;
  total_orders?: number;
  total_shipping?: number;
  same_as_address?: boolean;
  tax?: Tax;
  total_tax?: number;
}
