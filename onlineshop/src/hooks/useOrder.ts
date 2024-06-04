import { Order } from '../../types';

const useOrder = () => {
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/order`;
  async function fetchData(order: Order) {
    try {
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      console.log(order);
    } catch (error) {
      console.error(error);
    }
  }
  return fetchData;
};
export default useOrder;
