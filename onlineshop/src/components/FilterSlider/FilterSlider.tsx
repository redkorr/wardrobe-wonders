import { useCallback, useEffect, useRef, useState } from 'react';
import { Price } from 'types';
import './FilterSlider.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setMaxPriceFilter, setMinPriceFilter } from '@/features/filterSlice';
import { useAppSelector } from '@/hooks/useAppSelector';

interface FilterSliderProps {
  filter: Price;
}

const FilterSlider = ({ filter }: FilterSliderProps) => {
  const { min, max } = filter;
  const urlParams = new URLSearchParams(window.location.search);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { min: debouncedMinVal, max: debouncedMaxVal } = useAppSelector((state) => state.filter.price);
  const [minVal, setMinVal] = useState(debouncedMinVal);
  const [maxVal, setMaxVal] = useState(debouncedMaxVal);

  useEffect(() => {
    dispatch(setMinPriceFilter(min));
    dispatch(setMaxPriceFilter(max));
  }, [dispatch]);

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
    if (minVal < min) {
      urlParams.set('min', min.toString());
    } else {
      urlParams.set('min', debouncedMinVal.toString());
    }
    if (maxVal >= max) {
      urlParams.set('max', max.toString());
    } else if (maxVal < minVal) {
      urlParams.set('max', debouncedMinVal.toString());
    } else {
      urlParams.set('max', debouncedMaxVal.toString());
    }

    navigate('?' + urlParams.toString());
  };

  useEffect(() => {
    const delayMinVal = setTimeout(() => {
      dispatch(setMinPriceFilter(minVal));
    }, 500);
    return () => clearTimeout(delayMinVal);
  }, [minVal, 500]);
  useEffect(() => {
    const delayMaxVal = setTimeout(() => {
      dispatch(setMaxPriceFilter(maxVal));
    }, 500);
    return () => clearTimeout(delayMaxVal);
  }, [maxVal, 500]);

  return (
    <div className="p-5">
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
