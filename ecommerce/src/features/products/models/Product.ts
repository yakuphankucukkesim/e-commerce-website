export interface Product {
  name: string;
  price: number;
  description?: string;
  ingredient?: string;
}

export interface ProductDocument extends Product {
  categories: any;
  _id: string;
  __v: number;
}
