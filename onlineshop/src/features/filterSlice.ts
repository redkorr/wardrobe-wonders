import { ParentKey } from '@/components/FilterCheckbox';
import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';
import { FilterState } from 'types';

const initialState: FilterState = {
  colors: {},
  sizes: {},
  price: {
    min: 0,
    max: 0
  }
};

const rootReducer = combineReducers({});

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state: RootState, action: PayloadAction<{ parentKey: ParentKey; childKey: string }>) => {
      return {
        ...state,
        [action.payload.parentKey]: {
          ...state[action.payload.parentKey],
          [action.payload.childKey]: true
        }
      };
    },
    toggleFilterState: (state: RootState, action: PayloadAction<{ parentKey: string; childKey: string }>) => {
      return {
        ...state,
        [action.payload.parentKey]: {
          ...state[action.payload.parentKey],
          [action.payload.childKey]: !state.colors[action.payload.childKey]
        }
      };
    },
    deleteFilterItem: (state: RootState, action: PayloadAction<{ parentKey: string; childKey: string }>) => {
      delete state[action.payload.parentKey][action.payload.childKey];
    },
    setMinPriceFilter: (state: RootState, action: PayloadAction<number>) => {
      state.price.min = action.payload;
    },
    setMaxPriceFilter: (state: RootState, action: PayloadAction<number>) => {
      state.price.max = action.payload;
    },
    setBackPriceFilter: (state: RootState) => {
      state.price.min = 0;
      state.price.max = 0;
    },
    setBackAllFilters: (state: RootState) => {
      state.colors = {};
      state.sizes = {};
      state.price.min = 0;
      state.price.max = 0;
    }
  }
});

export const selectFilter = (state: RootState) => state.filter.value;

export const {
  addFilter,
  toggleFilterState,
  deleteFilterItem,
  setMinPriceFilter,
  setMaxPriceFilter,
  setBackPriceFilter,
  setBackAllFilters
} = filterSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;

export default filterSlice.reducer;
