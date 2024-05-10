import { useState } from 'react';
import { Discount } from '../../types';
import { useAppDispatch } from './useAppDispatch';
import { updateDiscountValue } from '@/features/shoppingCartSlice';

const useDiscount = () => {
  const [discount, setDiscount] = useState<Discount | undefined>(undefined);
  const dispatch = useAppDispatch();
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';

  const updateDiscount = async (code: string) => {
    try {
      const response = await fetch(`${env}/api/discount/${code}`);
      const json = await response.json();

      setDiscount(json);
      dispatch(updateDiscountValue(json.value));
    } catch (error) {
      console.error(error);
    }
  };

  return { updateDiscount, discount };
};

export default useDiscount;
