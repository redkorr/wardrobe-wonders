import { useState } from 'react';
import { Discount } from '../../types';

const useDiscount = () => {
  const [discount, setDiscount] = useState<Discount | undefined>(undefined);
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';

  const fetchDiscount = async (code: string) => {
    try {
      const response = await fetch(`${env}/api/discount/${code}`);
      const json = await response.json();

      setDiscount(json);
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchDiscount, discount };
};

export default useDiscount;
