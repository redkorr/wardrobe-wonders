import { addFilter, deleteFilterItem } from '@/features/filterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { FilterStateWithoutPrice } from 'types';

const parentKey = ['colors', 'sizes'] as const;

export type ParentKey = (typeof parentKey)[number];

interface FilterCheckboxProps {
  filterItem: string;
  filterKey: string;
}

export const isParentKey = (value: string): value is ParentKey => {
  return parentKey.includes(value as ParentKey);
};

const FilterCheckbox = ({ filterItem, filterKey }: FilterCheckboxProps) => {
  const selectedFilters = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  function handleClick() {
    if (!filterItem) return;
    if (selectedFilters[filterKey as keyof FilterStateWithoutPrice][filterItem]) {
      dispatch(deleteFilterItem({ parentKey: filterKey, childKey: filterItem }));
    } else {
      if (isParentKey(filterKey)) dispatch(addFilter({ parentKey: filterKey, childKey: filterItem }));
    }
  }

  return (
    <button
      onClick={() => handleClick()}
      className="flex items-center gap-2 px-1 py-2 w-full hover:bg-[#e2e2e2]"
    >
      <input
        type="checkbox"
        checked={
          selectedFilters[filterKey as keyof FilterStateWithoutPrice][filterItem]
            ? selectedFilters[filterKey as keyof FilterStateWithoutPrice][filterItem]
            : false
        }
        onChange={() => handleClick()}
        className="relative peer shrink-0 cursor-pointer appearance-none w-4 h-4 border-[1px] border-[#1b1b1b] rounded-none bg-white checked:bg-white focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
      />
      <svg
        className=" cursor-pointer absolute w-4 h-4 hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <div className="w-3 h-3 rounded-md bg-black"></div>
      <p>{filterItem}</p>
    </button>
  );
};

export default FilterCheckbox;
