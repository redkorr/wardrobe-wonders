import { createSlice, PayloadAction, combineReducers, current } from '@reduxjs/toolkit';
import { PaginationState } from 'types';

const initialState: PaginationState = {
  page: 1,
  limit: 10,
  numberOfPages: 1
};

const rootReducer = combineReducers({});

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state: RootState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    incrementPageNumber: (state: RootState) => {
      if (current(state).numberOfPages % current(state).limit > 5) {
        if (current(state).numberOfPages > current(state).page) {
          state.page = current(state).page + 1;
        }
      } else if (current(state).numberOfPages > current(state).page) {
        state.page = current(state).page + 1;
      }
    },
    decrementPageNumber: (state: RootState) => {
      if (1 < current(state).page) {
        state.page = current(state).page - 1;
      }
    },
    setLimit: (state: RootState, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    calculateNumberOfPages: (state: RootState, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        if (action.payload % current(state).limit > 5) {
          state.numberOfPages = Number((action.payload / current(state).limit).toFixed());
        } else {
          state.numberOfPages = Number((action.payload / current(state).limit + 1).toFixed());
        }
      }
    }
  }
});

export const { setPage, setLimit, incrementPageNumber, decrementPageNumber, calculateNumberOfPages } =
  paginationSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;

export default paginationSlice.reducer;
