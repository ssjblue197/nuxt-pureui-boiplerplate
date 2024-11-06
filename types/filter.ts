export type Sort = 'ASC' | 'DESC' | '';

export interface PaginateParams {
  page?: number;
  limit?: number;
}

export interface FilterParams extends PaginateParams {}
