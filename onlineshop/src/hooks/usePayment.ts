import { useAppSelector } from './useAppSelector';

const usePayment = (orderId: string) => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/stripe/payment`;
  async function getClientSecret() {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shoppingCartItems: shoppingCart.items,
          discountValue: shoppingCart.discount_value,
          orderId: orderId
        })
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  return { getClientSecret };
};
export default usePayment;
