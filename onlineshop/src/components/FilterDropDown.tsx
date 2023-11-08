import { useReducer } from 'react';
import { FilterCheckbox } from '.';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterDropDown = () => {
  const [isListOpen, toggleIsListOpen] = useReducer((listState) => !listState, false);

  return (
    <div className="h-[34px]">
      <button
        className="flex justify-between items-center text-base border border-slate-800 w-32 py-1 px-2"
        onClick={toggleIsListOpen}
      >
        <p>Color</p> {isListOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isListOpen && (
        <div className="z-10 relative bg-white w-60 mt-2 border border-b-0 border-l-0 border-r-0">
          <FilterCheckbox />
          <button className="flex items-center gap-1 m-1">
            Blue
            <div className="w-2 h-2 bg-blue-700"></div>
          </button>
          <button className="text-center w-56 bg-[#f1f1f1] py-2 m-2">Accept</button>
        </div>
      )}
    </div>
  );
};

export default FilterDropDown;
