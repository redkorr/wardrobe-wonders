import { deleteFilterItem, setBackAllFilters, setBackPriceFilter } from '@/features/filterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FilterPills = () => {
  const filters = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const filterArray: Array<string> = [];
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  Object.keys(filters).forEach((filterCategory) => {
    if (
      'min' in filters[filterCategory as keyof typeof filters] ||
      'max' in filters[filterCategory as keyof typeof filters]
    ) {
      if (filters.price.min === 0 && filters.price.max === 0) return;
      filterArray.push(`price: ${filters.price.min} to ${filters.price.max}`);
    } else {
      if (Object.keys(filters[filterCategory as keyof typeof filters]).length === 0) return;
      Object.keys(filters[filterCategory as keyof typeof filters]).forEach((filter) => {
        filterArray.push(`${filterCategory.slice(0, filterCategory.length - 1)}: ${filter}`);
      });
    }
  });
  const handleClick = (filter: string) => {
    if (filter.includes('price')) {
      dispatch(setBackPriceFilter());
      urlParams.delete('min');
      urlParams.delete('max');
      navigate(`?${urlParams.toString()}`);
    } else {
      dispatch(deleteFilterItem({ parentKey: filter.split(': ')[0] + 's', childKey: filter.split(': ')[1] }));
      if (Object.keys(filters[`${filter.split(': ')[0]}s` as keyof typeof filters]).length > 1) {
        const urlParamsFilter = urlParams
          .get(filter.split(': ')[0])
          ?.replace(',', ' ')
          .replace(filter.split(': ')[1], '')
          .trim()
          .replace(' ', ',');
        if (urlParamsFilter) urlParams.set(filter.split(': ')[0], urlParamsFilter);
      } else {
        urlParams.delete(filter.split(': ')[0]);
      }
      navigate(`?${urlParams.toString()}`);
    }
  };

  return (
    <div className="flex gap-2">
      {filterArray.map((filter) => (
        <button
          key={filter}
          className="flex items-center border pl-1 border-slate-800 p-[1px]"
          onClick={() => handleClick(filter)}
        >
          {filter}
          <X className="h-5" />
        </button>
      ))}
      {filterArray.length > 1 && (
        <button
          className="flex items-center border pl-1 border-slate-800 p-[1px]"
          onClick={() => {
            for (const key of urlParams.keys()) {
              dispatch(setBackAllFilters());
              urlParams.delete(key);
            }
            navigate(`?${urlParams.toString()}`);
          }}
        >
          Clear all
          <X className="h-5" />
        </button>
      )}
    </div>
  );
};

export default FilterPills;
