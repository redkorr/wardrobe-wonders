import { createSlice, PayloadAction, combineReducers, current } from '@reduxjs/toolkit';
import { PaginationState } from 'types';

const initialState: PaginationState = {
  page: 1,
  limit: 10
};

const rootReducer = combineReducers({});

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state: RootState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    incrementPageNumber: (state: RootState, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        if (action.payload > current(state).page) {
          state.page = current(state).page + 1;
        }
      }
    },
    decrementPageNumber: (state: RootState) => {
      if (1 < current(state).page) {
        state.page = current(state).page - 1;
      }
    },
    setLimit: (state: RootState, action: PayloadAction<number>) => {
      state.limit = action.payload;
      console.log('slice', action.payload);
    }
  }
});

export const { setPage, setLimit, incrementPageNumber, decrementPageNumber } = paginationSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;

export default paginationSlice.reducer;
