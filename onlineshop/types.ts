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
  sizes: {
    [sizeKey: string]: Size;
  };
  currency: string;
  category: Category;
  type: ProductType;
  images: string[];
  description: Description;
  color: string;
};

export type Category = {
  name: string;
  types: ProductType[];
};

export type ProductType = {
  name: string;
  display_name: string;
};

export type Filters = {
  colors: string[];
  sizes: string[];
  prices: Price;
};

export type Price = {
  min: number;
  max: number;
};

export type Size = {
  stock: number;
  price: number;
};

export type FilterState = {
  colors: {
    [color: string]: boolean;
  };
  sizes: {
    [size: string]: boolean;
  };
  price: Price;
};

export type FilterStateWithoutPrice = Omit<FilterState, 'price'>;
