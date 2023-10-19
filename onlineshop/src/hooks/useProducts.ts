import { useEffect, useState } from 'react';
import { Cloth } from '../../types';

const useProducts = (): Array<Cloth> | undefined => {
  const [data, setData] = useState<Array<Cloth> | undefined>(undefined);
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${env}/api/products`);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [env]);

  return data;
};

export default useProducts;
