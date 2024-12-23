import { CheckoutDetails, ShoppingCartList } from '@/components';

const ShoppingCart = () => {
  return (
    <>
      <div className=" flex m-8 mt-32 gap-8 font-medium">
        <ShoppingCartList />
        <CheckoutDetails buttonText="Go to the checkout" />
      </div>
    </>
  );
};

export default ShoppingCart;
