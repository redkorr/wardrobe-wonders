import { useEffect, useState } from 'react';
import { Product } from '../../types';

const useProducts = (sex: string | undefined, category: string | undefined, type: string | undefined) => {
  const [data, setData] = useState<Array<Product> | undefined>(undefined);
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/products/${sex}${category ? `/${category}` : ''}${type ? `/${type}` : ''}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [URL]);

  return data;
};

export default useProducts;
