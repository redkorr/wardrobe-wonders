export type Description = {
  body: string;
  fabric_main: string[];
  fabric_other?: string[];
  fabric_inside?: string[];
};
export type Product = {
  product_id?: string;
  sex: string;
  currency: string;
  category: Category;
  type: ProductType;
  description: Description;
  colors: Color[];
};
export type Color = {
  name: string;
  item_id?: string;
  color_name: string;
  color: string;
  sizes: {
    [sizeKey: string]: Size;
  };
  images: string[];
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

export type Discount = {
  discount_id: number;
  value: number;
  code: number;
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

export type ShoppingCartState = {
  items: ShoppingCartItem[];
  delivery_cost: number;
  total_value: number;
  discount_value: number;
  count: number;
  status: Status;
};
export type ShoppingCartItem = {
  shopping_cart_id?: string;
  product_id?: string;
  currency: string;
  quantity: number;
  category: Category;
  type: ProductType;
  color: Partial<Color>;
};

const STATUSES = ['LOADING', 'SUCCESS', 'EMPTY'] as const;

export type Status = (typeof STATUSES)[number];

export type FilterStateWithoutPrice = Omit<FilterState, 'price'>;

export type CheckoutFormData = {
  delivery: string;
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  phone_number: string;
  email: string;
};
