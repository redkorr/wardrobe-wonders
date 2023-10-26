export type Description = {
  body: string;
  fabric_main: string[];
  fabric_other?: string[];
  fabric_inside?: string[];
};
export type Product = {
  item_id?: string;
  product_id?: string;
  sex: string;
  name: string;
  price: number;
  currency: string;
  category: Category;
  type: string;
  images: string[];
  description: Description;
  color: string;
  size: string;
  stock: number;
};

export type Category = {
  name: string;
};
