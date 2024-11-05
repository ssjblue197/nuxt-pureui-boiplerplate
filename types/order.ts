export interface OrderProgress {
  name?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  step?: number;
  status?: 'done' | 'doing' | 'todo';
}
