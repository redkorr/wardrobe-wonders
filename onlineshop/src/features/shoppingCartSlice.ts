import { PayloadAction, combineReducers, createSlice, current } from '@reduxjs/toolkit';
import { ShoppingCartItem, ShoppingCartState } from 'types';

const initialState: ShoppingCartState = {
  items: [],
  count: 0,
  status: 'LOADING'
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
    },
    incrementShoppingCartItemQuantity: (state: RootState, action: PayloadAction<string>) => {
      state.items[
        current(state).items.findIndex((item: ShoppingCartItem) => item.shopping_cart_id === action.payload)
      ].quantity += 1;
      state.count += 1;
      localStorage.setItem('shopping-cart', JSON.stringify(state.items));
      localStorage.setItem('count', JSON.stringify(state.count));
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
    },
    loadShoppingCartFromStorage: (state: RootState, action: PayloadAction<string | null>) => {
      const test = action.payload ? action.payload : '[]';
      state.items = JSON.parse(test);
      state.count = Number(localStorage.getItem('count'));
    },
    deleteShoppingCartItem: (state: RootState, action: PayloadAction<string>) => {
      const itemIndex = current(state).items.findIndex(
        (item: ShoppingCartItem) => item.shopping_cart_id === action.payload
      );
      state.count = current(state).count - current(state).items[itemIndex].quantity;
      state.items.splice(itemIndex, 1);
      localStorage.setItem('shopping-cart', JSON.stringify(state.items));
      localStorage.setItem('count', JSON.stringify(state.count));
    }
  }
});

export const selectShoppingCart = (state: RootState) => state.shoppingCart.value;

export const {
  addShoppingCartItem,
  incrementShoppingCartItemQuantity,
  decrementShoppingCartItemQuantity,
  loadShoppingCartFromStorage,
  deleteShoppingCartItem
} = shoppingCartSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;

export default shoppingCartSlice.reducer;
