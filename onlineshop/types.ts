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

export type ProductsData = {
  data: Array<Product>;
  count: number;
  numberOfPages: number;
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

export type PaginationState = {
  page: number;
  limit: number;
};

export type ShoppingCartState = {
  items: ShoppingCartItem[];
  delivery_cost: number;
  payment_cost: number;
  items_price: number;
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

const STATUSES = ['ACCEPTED', 'PENDING', 'CANCELED', 'RETURNING', 'RETURNED', 'COMPLETED'] as const;

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
  payment: string;
};

export type BillingAddressFormData = {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  phone_number: string;
  email: string;
};
export type BillingAddressData = {
  _id?: string;
  user_id?: string;
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  phone_number: string;
  email: string;
};

export type Order = {
  user_id?: string | null;
  order_id: string | undefined;
  date: Date;
  delivery: Delivery;
  payment: Payment;
  items_price: number;
  total: number;
  order_status: OrderStatus;
  order_items: Array<OrderItem> | null;
  billing_address: BillingAddress;
};

export type OrderItem = {
  product_id?: string;
  category: string;
  currency: string;
  type: string;
  name?: string;
  image_path: string;
  color_name?: string;
  price: number;
  size: string;
  quantity: number;
};

export type Delivery = {
  type: string;
  cost: number;
};

export type Payment = {
  type: string;
  cost: number;
};

export type BillingAddress = {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  phone_number: string;
  email: string;
};

const order_statuses = ['ACCEPTED', 'PENDING', 'CANCELED', 'RETURNING', 'RETURNED', 'COMPLETED'] as const;

export type OrderStatus = (typeof order_statuses)[number];
