import { CheckoutDetails, ShoppingCartList } from '@/components';

const ShoppingCart = () => {
  return (
    <>
      <div className=" flex mx-8 mt-[94px] mb-[95px] pt-20 gap-8 font-medium">
        <ShoppingCartList />
        <CheckoutDetails buttonText="Go to the checkout" />
      </div>
    </>
  );
};

export default ShoppingCart;
