import type { RouteLocationPathRaw, RouteLocationNamedRaw } from 'vue-router';
export interface Paginate {
  page?: number;
  limit?: number;
}

export interface PaginateInfo {
  count?: number;
  total?: number;
}

export interface MetaPaginate {
  first_page_url?: string | null;
  from?: number | null;
  last_page?: number | null;
  last_page_url?: string | null;
  current_page?: number | null;
  next_page_url?: null;
  path?: string | null;
  per_page?: number | null;
  prev_page_url?: null;
  to?: number | null;
  total?: number | null;
}

export interface ResponsePaginate<T> extends MetaPaginate {
  data?: Array<T>;
}

export interface Response<T> {
  data?: T;
}

export interface CountryState {
  id?: number;
  iso2?: string;
  name?: string;
}

export interface Country {
  id?: number;
  iso2?: string;
  name?: string;
  states: Array<CountryState>;
}

export interface ShippingMethod {
  id?: number;
  name?: string;
  price?: number;
  min_shipping_time?: number;
  max_shipping_time?: number;
  created_at?: string;
  updated_at?: string;
}

export interface FilterValue {
  type?: string;
  value?: string;
  label?: string;
}

export interface Breadcrumb {
  type?: string;
  name?: string;
  slug?: string;
  level?: number;
}
