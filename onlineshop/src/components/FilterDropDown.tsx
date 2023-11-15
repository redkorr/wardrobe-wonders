import { useReducer } from 'react';
import { FilterCheckbox } from '.';
import { ChevronUp } from 'lucide-react';

const FilterDropDown = () => {
  const [isListOpen, toggleIsListOpen] = useReducer((listState) => !listState, false);

  return (
    <div className="h-[34px]">
      <button
        className="flex justify-between items-center text-base border border-slate-800 w-32 py-1 px-2"
        onClick={toggleIsListOpen}
      >
        <p>Color</p>{' '}
        <ChevronUp className={`transition ease-out duration-300 ${isListOpen && 'transition rotate-180'}`} />
      </button>

      {isListOpen && (
        <div className="z-10 relative bg-white w-60 mt-2 border border-b-0 border-l-0 border-r-0">
          {}
          <FilterCheckbox />
        </div>
      )}
    </div>
  );
};

export default FilterDropDown;
