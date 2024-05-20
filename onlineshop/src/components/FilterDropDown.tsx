import { ReactNode, useRef } from 'react';
import { FilterCheckbox, FilterSlider } from '.';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Price } from 'types';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useAppSelector';

interface FiltersDropDownProps {
  filter: Filter;
  isActive: boolean;
  onClick: () => void;
  filterKey: string;
}

type Filter = string[] | Price | undefined;

const FilterDropDown = ({ filter, isActive = false, onClick, filterKey }: FiltersDropDownProps) => {
  const urlParams = new URLSearchParams(window.location.search);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const selectedFilters = useAppSelector((state) => state.filter);
  function renderFilterDropDown(filter: Filter): ReactNode {
    const isFilterArray = Array.isArray(filter);

    const searchParamKey = filterKey.slice(0, filterKey.length - 1);
    const arrayOfSelectedFilters: Array<string> = [];

    const selectFilters = () => {
      Object.keys(selectedFilters[filterKey as keyof typeof selectedFilters]).forEach((key) => {
        arrayOfSelectedFilters.push(key);
      });
    };
    const handleClick = () => {
      selectFilters();
      if (Object.keys(selectedFilters[filterKey as keyof typeof selectedFilters]).length === 0) {
        urlParams.delete(searchParamKey);
      } else {
        urlParams.set(searchParamKey, arrayOfSelectedFilters.join(','));
      }
      navigate(`?${urlParams.toString()}`);
      onClick();
    };
    const closeDropdown = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isActive) {
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
          {filter.map((filterItem: string) => (
            <FilterCheckbox
              filterItem={filterItem}
              filterKey={filterKey}
              key={filterItem}
            />
          ))}
          <button
            className="text-white mt-6 py-2 w-full bg-slate-700"
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
        />
      );
    }
  }

  return (
    <div className="flex flex-col w-fit relative">
      <div className="h-[34px] flex">
        <div>
          <button
            className="flex justify-between items-center text-base border border-slate-800 w-32 py-1 px-2"
            onClick={onClick}
          >
            <p>{filterKey}</p> {isActive ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
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
