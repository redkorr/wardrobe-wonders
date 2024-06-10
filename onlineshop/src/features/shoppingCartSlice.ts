import { PayloadAction, combineReducers, createSlice, current } from '@reduxjs/toolkit';
import { ShoppingCartItem, ShoppingCartState } from 'types';

const initialState: ShoppingCartState = {
  items: [],
  delivery_cost: 0,
  payment_cost: 0,
  count: 0,
  items_price: 0,
  total_value: 0,
  discount_value: 0,
  status: 'ACCEPTED'
};

const rootReducer = combineReducers({});

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addShoppingCartItem: (state: RootState, action: PayloadAction<ShoppingCartItem>) => {
      let isNewItem = true;
      current(state).items.forEach((item: ShoppingCartItem) => {
        if (item.shopping_cart_id === action.payload.shopping_cart_id) {
          state.items[
            current(state).items.findIndex(
              (item: ShoppingCartItem) => item.shopping_cart_id === action.payload.shopping_cart_id
            )
          ].quantity += 1;
          state.count += 1;
          isNewItem = false;
          localStorage.setItem('shopping-cart', JSON.stringify(state.items));
          localStorage.setItem('count', JSON.stringify(state.count));
        }
      });
      if (isNewItem) {
        state.items.push(action.payload);
        state.count += 1;
        localStorage.setItem('shopping-cart', JSON.stringify(state.items));
        localStorage.setItem('count', JSON.stringify(state.count));
      }
      shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
    },
    incrementShoppingCartItemQuantity: (state: RootState, action: PayloadAction<string>) => {
      state.items[
        current(state).items.findIndex((item: ShoppingCartItem) => item.shopping_cart_id === action.payload)
      ].quantity += 1;
      state.count += 1;
      localStorage.setItem('shopping-cart', JSON.stringify(state.items));
      localStorage.setItem('count', JSON.stringify(state.count));
      shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
    },
    decrementShoppingCartItemQuantity: (state: RootState, action: PayloadAction<string>) => {
      const itemIndex = current(state).items.findIndex(
        (item: ShoppingCartItem) => item.shopping_cart_id === action.payload
      );
      if (current(state).items[itemIndex].quantity === 1) {
        shoppingCartSlice.caseReducers.deleteShoppingCartItem(state, action);
      } else {
        state.items[itemIndex].quantity -= 1;
        state.count -= 1;
        localStorage.setItem('shopping-cart', JSON.stringify(state.items));
        localStorage.setItem('count', JSON.stringify(state.count));
      }
      shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
    },
    loadShoppingCartFromStorage: (state: RootState, action: PayloadAction<string | null>) => {
      const test = action.payload ? action.payload : '[]';
      state.items = JSON.parse(test);
      state.count = Number(localStorage.getItem('count'));
      shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
    },
    deleteShoppingCartItem: (state: RootState, action: PayloadAction<string>) => {
      const itemIndex = current(state).items.findIndex(
        (item: ShoppingCartItem) => item.shopping_cart_id === action.payload
      );
      state.count = current(state).count - current(state).items[itemIndex].quantity;
      state.items.splice(itemIndex, 1);
      localStorage.setItem('shopping-cart', JSON.stringify(state.items));
      localStorage.setItem('count', JSON.stringify(state.count));
      shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
    },
    calculateValueOfProducts: (state: RootState) => {
      let value_of_products = 0;
      current(state).items.forEach((item: ShoppingCartItem) => {
        if (item.color.sizes) {
          value_of_products += item.color.sizes[Object.keys(item.color.sizes)[0]].price * item.quantity;
        }
      });
      state.items_price = value_of_products;
      shoppingCartSlice.caseReducers.calculateTotalPrice(state);
    },
    calculateTotalPrice: (state: RootState) => {
      let totalValue = current(state).items_price;
      if (current(state).discount_value > 0 || current(state).delivery_cost > 0) {
        state.total_value = Number(
          (
            totalValue -
            totalValue * (current(state).discount_value / 100) +
            current(state).delivery_cost +
            current(state).payment_cost
          ).toFixed(2)
        );
      } else {
        state.total_value = totalValue + current(state).delivery_cost + current(state).payment_cost;
      }
    },
    updateDiscountValue: (state: RootState, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.discount_value = action.payload;

        shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
      }
    },
    updateDeliveryCost: (state: RootState, action: PayloadAction<number | undefined>) => {
      if (action.payload !== null || action.payload !== undefined) {
        state.delivery_cost = action.payload;

        shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
      }
    },
    updatePaymentCost: (state: RootState, action: PayloadAction<number | undefined>) => {
      if (action.payload !== null || action.payload !== undefined) {
        state.payment_cost = action.payload;

        shoppingCartSlice.caseReducers.calculateValueOfProducts(state);
      }
    }
  }
});

export const selectShoppingCart = (state: RootState) => state.shoppingCart.value;

export const {
  addShoppingCartItem,
  incrementShoppingCartItemQuantity,
  decrementShoppingCartItemQuantity,
  loadShoppingCartFromStorage,
  deleteShoppingCartItem,
  calculateValueOfProducts,
  updateDiscountValue,
  updateDeliveryCost,
  updatePaymentCost,
  calculateTotalPrice
} = shoppingCartSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;

export default shoppingCartSlice.reducer;
