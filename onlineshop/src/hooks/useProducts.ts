import { useEffect, useState } from 'react';
import { ProductsData } from '../../types';

const useProducts = (
  sex: string | undefined,
  category: string | undefined,
  type: string | undefined,
  params: URLSearchParams | undefined
) => {
  const [data, setData] = useState<ProductsData>();
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/products/${sex}${category ? `/${category}` : ''}${type ? `/${type}` : ''}${
    ParamsToString(params) !== '?' ? `${ParamsToString(params)}` : ''
  }`;

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

const ParamsToString = (params: URLSearchParams | undefined) => {
  let searchParams = '?';
  if (params?.has('color')) {
    searchParams = searchParams + `color=${params.get('color')}&`;
  }
  if (params?.has('size')) {
    searchParams = searchParams + `size=${params.get('size')}&`;
  }
  if (params?.has('min') && params.has('max')) {
    searchParams = searchParams + `min=${params.get('min')}&`;
    searchParams = searchParams + `max=${params.get('max')}&`;
  }
  if (params?.has('limit')) {
    searchParams = searchParams + `limit=${params.get('limit')}&`;
  }
  if (params?.has('page')) {
    searchParams = searchParams + `page=${params.get('page')}&`;
  }
  if (searchParams.slice(searchParams.length - 1) === '&') {
    searchParams = searchParams.slice(0, searchParams.length - 1);
  }
  return searchParams;
};

export default useProducts;
