import { FilterState } from 'types';

const createArrayOfFilters = (filters: FilterState) => {
  const filterArray: Array<string> = [];
  Object.keys(filters).forEach((filterCategory) => {
    if (
      'min' in filters[filterCategory as keyof typeof filters] ||
      'max' in filters[filterCategory as keyof typeof filters]
    ) {
      if (filters.price.min === 0 && filters.price.max === 0) return;
      filterArray.push(`price: ${filters.price.min} to ${filters.price.max}`);
    } else {
      if (Object.keys(filters[filterCategory as keyof typeof filters]).length === 0) return;
      Object.keys(filters[filterCategory as keyof typeof filters]).forEach((key) => {
        if (filters[filterCategory as keyof typeof filters][key]) {
          filterArray.push(`${filterCategory.slice(0, filterCategory.length - 1)}: ${key}`);
        }
      });
    }
  });
  return filterArray;
};
export default createArrayOfFilters;
