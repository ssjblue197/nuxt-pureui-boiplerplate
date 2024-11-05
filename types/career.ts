export interface Location {
  id?: number;
  name?: string;
  country?: string;
  state?: string;
  city?: string;
  created_by_user_id?: number;
  deleted_at?: null;
  created_at?: string;
  updated_at?: string;
  pivot?: {
    work_id?: number;
    location_id?: number;
  };
}

export interface JobType {
  id?: number;
  name?: string;
  created_at?: string;
  updated_at?: string;
  pivot?: {
    work_id?: number;
    work_type_id?: number;
  };
}

export interface Job {
  id?: number;
  title?: string;
  number_of_vacancies?: number;
  status?: string;
  type?: string;
  start_date?: number;
  end_date?: number;
  is_negotiation?: true;
  is_remote?: true;
  salary_from?: string;
  salary_to?: string;
  salary_period?: string;
  description?: string;
  requirement?: string;
  benefit?: string;
  locations?: Location[];
  types?: JobType[];
  location?: Location;
}

export interface CountData {
  count?: number;
  type?: string;
  location_id?: number;
  location?: Location;
  id?: number;
  name?: string;
  works_count?: number;
}
