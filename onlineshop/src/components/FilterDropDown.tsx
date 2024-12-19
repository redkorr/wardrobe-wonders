import { ReactNode, useEffect, useRef, useState } from 'react';
import { FilterCheckbox, FilterSlider } from '.';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FilterColorState, FilterState, Price } from 'types';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setFiltersState } from '@/features/filterSlice';
import selectFilters from '@/utils/selectFilters';

interface FiltersDropDownProps {
  filter: Filter;
  isActive: boolean;
  onClick: () => void;
  filterKey: string;
}

type Filter = string[] | FilterColorState[] | Price | undefined;

const FilterDropDown = ({ filter, isActive = false, onClick, filterKey }: FiltersDropDownProps) => {
  const selectedFilters = useAppSelector((state) => state.filter);
  const [newSelectedFilters, setNewSelectedFilters] = useState<FilterState>(selectedFilters);
  useEffect(() => {
    setNewSelectedFilters(selectedFilters);
  }, [selectedFilters]);
  // console.log(filterKey);

  const urlParams = new URLSearchParams(window.location.search);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function renderFilterDropDown(filter: Filter): ReactNode {
    const isFilterArray = Array.isArray(filter);

    const searchParamKey = filterKey.slice(0, filterKey.length - 1);

    const handleClick = () => {
      dispatch(setFiltersState(newSelectedFilters));
      // console.log(selectedFilters);

      const arrayOfSelectedFilters = selectFilters(newSelectedFilters, filterKey);
      console.log('dropdown', arrayOfSelectedFilters);

      if (
        Object.values(newSelectedFilters[filterKey as keyof typeof selectedFilters]).every((filter) => filter === false)
      ) {
        urlParams.delete(searchParamKey);
      } else {
        urlParams.set(searchParamKey, arrayOfSelectedFilters.join(','));
      }
      navigate(`?${urlParams.toString()}`);
      onClick();
    };
    const closeDropdown = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        isActive
      ) {
        onClick();
      }
    };

    document.addEventListener('mousedown', closeDropdown);

    if (!filter) {
      return;
    }
    if (isFilterArray) {
      return (
        <div
          className="p-5"
          ref={dropdownRef}
        >
          {filter.map((filterItem: string | FilterColorState) => (
            <FilterCheckbox
              filterItem={filterItem}
              filterKey={filterKey}
              newSelectedFilters={newSelectedFilters}
              setNewSelectedFilters={setNewSelectedFilters}
            />
          ))}
          <button
            className="text-white mt-6 py-2 w-full bg-slate-700 hover:bg-slate-800 transition duration-200 ease-in-out"
            onClick={handleClick}
          >
            Accept
          </button>
        </div>
      );
    }
    if ('min' in filter || 'max' in filter) {
      return (
        <FilterSlider
          filter={filter}
          onClick={onClick}
          isActive={isActive}
          buttonRef={buttonRef}
        />
      );
    }
  }

  return (
    <div className="flex flex-col w-fit relative">
      <div className="h-[34px] flex">
        <button
          ref={buttonRef}
          className="flex justify-between items-center text-base border border-slate-800 w-32 py-1 px-2"
          onClick={onClick}
        >
          <p>{filterKey}</p> {isActive ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isActive && (
        <div className="z-10 absolute top-[34px] left-0 w-60 bg-white mt-2 border border-b-0 border-l-0 border-r-0">
          {renderFilterDropDown(filter)}
        </div>
      )}
    </div>
  );
};

export default FilterDropDown;
