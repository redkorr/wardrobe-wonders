import { ShoppingCartSummary, NavBar, ShoppingCartList } from '@/components';

const ShoppingCart = () => {
  return (
    <>
      <NavBar />
      <div className=" flex m-8 mt-32 gap-8 font-medium">
        <ShoppingCartList />
        <ShoppingCartSummary />
      </div>
    </>
  );
};

export default ShoppingCart;
