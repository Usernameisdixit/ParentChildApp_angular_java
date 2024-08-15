export interface Category
{
    id: number;
  name: string;
  children?: Category[];
  childrenLoaded?: boolean;
}

