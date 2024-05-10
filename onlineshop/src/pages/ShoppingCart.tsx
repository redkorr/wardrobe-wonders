import { Summary, NavBar, ShoppingCartList } from '@/components';

const ShoppingCart = () => {
  return (
    <>
      <NavBar />
      <div className=" flex m-8 mt-32 gap-8 font-medium">
        <ShoppingCartList />
        <Summary
          buttonText="Go to the checkout"
          path="checkout"
        />
      </div>
    </>
  );
};

export default ShoppingCart;
