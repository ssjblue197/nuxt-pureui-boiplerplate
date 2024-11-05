export interface MenuItem {
  id?: number;
  name?: string | null;
  display_order?: number | null;
  parent_id?: number | null;
  type?: string;
  link_to?: string;
  link_value?: number;
  slug?: string;
  children?: Array<MenuItem>;
}
