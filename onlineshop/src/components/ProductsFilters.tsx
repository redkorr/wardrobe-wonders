import { FilterDropDown } from '.';
import useFilters from '@/hooks/useFilters';
import { useState } from 'react';

interface ProductsFiltersProps {
  category: string | undefined;
  type: string | undefined;
  sex: string | undefined;
}

type DropdownsStateTuple = [boolean, boolean, boolean];

const DROPDOWNS_TUPLE_INITIAL_STATE: DropdownsStateTuple = [false, false, false];

const ProductsFilters = ({ category, type, sex }: ProductsFiltersProps) => {
  const [dropdownStates, setDropdownStates] = useState<DropdownsStateTuple>(DROPDOWNS_TUPLE_INITIAL_STATE);

  const filters = useFilters(category, type, sex);

  const handleDropdownClick = (index: number) => {
    const newStates = dropdownStates.map((state, i) => {
      if (index === i) {
        return !state;
      }
    });

    setDropdownStates(newStates as DropdownsStateTuple);
  };
  return (
    <div className="py-3 flex">
      {filters &&
        Object.keys(filters).map((key, index) => (
          <FilterDropDown
            filter={filters[key as keyof typeof filters]}
            filterKey={key}
            isActive={dropdownStates[index]}
            onClick={() => handleDropdownClick(index)}
            key={index}
          />
        ))}
    </div>
  );
};

export default ProductsFilters;
