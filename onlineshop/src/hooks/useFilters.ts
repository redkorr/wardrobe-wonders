import { useEffect, useState } from 'react';
import { Filters } from '../../types';

const useFilters = (category: string | undefined, type: string | undefined): Filters | undefined => {
  const [data, setData] = useState<Filters | undefined>(undefined);
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/filters${category ? `/${category}` : ''}/${type ? `/${type}` : ''}`;

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

export default useFilters;
