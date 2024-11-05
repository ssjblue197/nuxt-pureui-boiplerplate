interface AuthPayload {
  email?: string;
  password?: string;
  token?: string;
  name?: string;
}

interface User {
  id?: number;
  name?: string;
  email?: string;
  email_verified_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  is_admin?: boolean;
}

interface UserProfile {
  token?: string;
  // [key: string]: string | undefined;
  user?: User;
}
