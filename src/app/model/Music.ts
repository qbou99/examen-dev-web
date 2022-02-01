export interface Music {
  id?: number;
  title?: string;
  description?: string;
  album?: string;
  artist?: string;
  duration?: string;
  date?: string;
  style?: string[] | null;
  picture?: string | ArrayBuffer | null;
}
