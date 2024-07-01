import { useState } from 'react';
import { Order } from '../../types';

const useOrder = () => {
  const [data, setData] = useState<Array<Order> | Order>();
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/order`;
  async function postOrder(order: Order) {
    try {
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getOrderById(id: string) {
    try {
      const response = await fetch(`${URL}/${id}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  return { postOrder, getOrderById, data };
};
export default useOrder;
