import filterSlice from '@/features/filterSlice';
import shoppingCartSlice from '@/features/shoppingCartSlice';
import { configureStore } from '@reduxjs/toolkit';
// ...

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    shoppingCart: shoppingCartSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
