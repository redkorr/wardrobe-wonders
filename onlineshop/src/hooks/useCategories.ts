import { useEffect, useState } from 'react';
import { Category } from '../../types';

const useCategories = (): Array<Category> | undefined => {
  const [data, setData] = useState<Array<Category> | undefined>(undefined);
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${env}/api/categories`);
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

export default useCategories;
