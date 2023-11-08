import { RefObject, useRef } from 'react';

const FilterCheckbox = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  function toggleCheckbox(ref: RefObject<HTMLInputElement>) {
    if (!ref) return;
    if (ref.current) return (ref.current.checked = !ref.current.checked);
  }
  return (
    <button
      onClick={() => toggleCheckbox(checkboxRef)}
      className="flex items-center gap-2 px-1 py-2 w-full hover:bg-[#e2e2e2]"
    >
      <input
        onClick={() => toggleCheckbox(checkboxRef)}
        type="checkbox"
        ref={checkboxRef}
        className="relative peer shrink-0 cursor-pointer appearance-none w-4 h-4 border-[1px] border-[#1b1b1b] rounded-none bg-white checked:bg-white focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
      />
      <svg
        className=" cursor-pointer absolute w-4 h-4 hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <div className="w-3 h-3 rounded-md bg-black"></div>
      Black
    </button>
  );
};

export default FilterCheckbox;
