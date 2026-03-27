export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  shopeeUrl: string;
  available: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  label: string;
}
