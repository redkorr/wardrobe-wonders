import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Price } from 'types';
import './FilterSlider.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setMaxPriceFilter, setMinPriceFilter } from '@/features/filterSlice';

interface FilterSliderProps {
  filter: Price;
  isActive: boolean;
  onClick: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}

const FilterSlider = ({ filter, onClick, isActive, buttonRef }: FilterSliderProps) => {
  const { min, max } = filter;
  const urlParams = new URLSearchParams(window.location.search);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

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
  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);
  useEffect(() => {
    if (!range.current) return;
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    if (minVal >= min && maxVal <= max) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    } else if (maxVal > max) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${getPercent(max) - minPercent}%`;
    } else {
      range.current.style.left = `${getPercent(min)}%`;
      range.current.style.width = `${maxPercent - getPercent(min)}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (!range.current) return;

    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);
    if (maxVal <= max) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
    if (maxVal < minVal) {
      range.current.style.width = `0%`;
    }
    if (maxVal > max) {
      range.current.style.width = `${getPercent(max) - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const HandleClick = () => {
    if (minValRef.current > min && maxValRef.current < max) {
      dispatch(setMinPriceFilter(minValRef.current));
      dispatch(setMaxPriceFilter(maxValRef.current));
      urlParams.set('min', minValRef.current.toString());
      urlParams.set('max', maxValRef.current.toString());
    }
    if (maxValRef.current < max && minValRef.current <= min) {
      dispatch(setMinPriceFilter(min));
      dispatch(setMaxPriceFilter(maxValRef.current));
      urlParams.set('min', min.toString());
      urlParams.set('max', maxValRef.current.toString());
    }
    if (maxValRef.current >= max && minValRef.current > min) {
      dispatch(setMinPriceFilter(minValRef.current));
      dispatch(setMaxPriceFilter(max));
      urlParams.set('min', minValRef.current.toString());
      urlParams.set('max', max.toString());
    }

    onClick();
    navigate('?' + urlParams.toString());
  };
  return (
    <div
      className="p-5"
      ref={dropdownRef}
    >
      <div className="flex items-center justify-center h-10 flex-col">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            minValRef.current = value;
            setMinVal(value);
          }}
          className="appearance-none absolute h-0 w-40 outline-none z-30 pointer-events-none thumb"
          style={{ zIndex: minVal > max - 100 ? '50' : '30' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            maxValRef.current = value;
            setMaxVal(value);
          }}
          className="appearance-none bg-transparent absolute h-0 w-40 outline-none z-40 pointer-events-none thumb"
        />
        <div className="relative w-40">
          <div className="absolute rounded-sm h-1 bg-slate-400 w-full z-10" />
          <div
            ref={range}
            className="absolute rounded-sm h-1 bg-slate-700 z-20"
          />
        </div>
      </div>
      <div className="flex justify-around">
        <input
          className="mt-5 py-1 px-2 w-14 border rounded-none focus-visible:rounded-none input"
          defaultValue={min}
          type="number"
          value={minVal}
          min={min}
          max={max}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), max);
            minValRef.current = value;
            setMinVal(value);
          }}
        />
        <input
          className="mt-5 py-1 px-2 w-14 border rounded-none focus-visible:rounded-none input"
          defaultValue={max}
          type="number"
          value={maxVal}
          min={min}
          max={max}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), 0);
            maxValRef.current = value;
            setMaxVal(value);
          }}
        />
      </div>
      <div className="flex justify-center ">
        <button
          disabled={maxVal >= max && minVal <= min}
          className={` text-white mt-6 py-2 w-full ${maxVal < max || minVal > min ? 'bg-slate-700' : 'bg-slate-300'}`}
          onClick={HandleClick}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default FilterSlider;
