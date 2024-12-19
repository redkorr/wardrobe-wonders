import { deleteFilterItem, setBackAllFilters, setBackPriceFilter } from '@/features/filterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import createArrayOfFilters from '@/utils/createArrayOfFilters';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FilterPills = () => {
  const filters = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const filterArray = createArrayOfFilters(filters);

  const handleClick = (filter: string) => {
    if (filter.includes('price')) {
      dispatch(setBackPriceFilter());
      urlParams.delete('min');
      urlParams.delete('max');
      navigate(`?${urlParams.toString()}`);
    } else {
      dispatch(deleteFilterItem({ parentKey: filter.split(': ')[0] + 's', childKey: filter.split(': ')[1] }));
      let number = 0;
      Object.values(filters[(filter.split(': ')[0] + 's') as keyof typeof filters]).forEach((filter) => {
        if (filter === true) {
          number++;
        }
      });
      if (number > 1) {
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
  // console.log(filterArray);

  return (
    <div className="flex gap-2">
      {filterArray.map((filter) => (
        <button
          key={filter}
          className="flex items-center border pl-1 border-slate-800 p-[1px] hover:text-slate-600 transition duration-200 ease-in-out"
          onClick={() => handleClick(filter)}
        >
          {filter}
          <X className="h-5" />
        </button>
      ))}
      {filterArray.length > 1 && (
        <button
          className="flex items-center border pl-1 border-slate-800 p-[1px] hover:text-slate-600 transition duration-200 ease-in-out"
          onClick={() => {
            const keys = [...urlParams.keys()];
            for (const key of keys) {
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
