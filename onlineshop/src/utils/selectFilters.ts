import { FilterState } from 'types';

const selectFilters = (selectedFilters: FilterState, filterKey: string) => {
  const arrayOfSelectedFilters: Array<string> = [];
  Object.keys(selectedFilters[filterKey as keyof typeof selectedFilters]).forEach((key) => {
    if (filterKey === 'colors') {
      if (selectedFilters[filterKey as keyof typeof selectedFilters][key].isTrue) {
        arrayOfSelectedFilters.push(key);
      }
    } else {
      if (selectedFilters[filterKey as keyof typeof selectedFilters][key]) {
        arrayOfSelectedFilters.push(key);
      }
    }
  });
  return arrayOfSelectedFilters;
};

export default selectFilters;
