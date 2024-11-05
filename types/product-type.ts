export interface ProductType {
  id?: number;
  name?: string;
  description?: string;
  slug?: string;
  image?: File | string | null;
  position?: number;
  full_url?: string;
  thumb_url?: string;
}
