import { useAppSelector } from '@/hooks/useAppSelector';
import useDiscount from '@/hooks/useDiscount';
import { PercentSquare, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const { fetchDiscount, discount } = useDiscount();
  const discountRef = useRef<HTMLInputElement>(null);
  const shoppingCart = useAppSelector((state) => state.shoppingCart);

  const sumValueOfProducts = () => {
    let valueOfProducts = 0;
    if (shoppingCart)
      shoppingCart.items.forEach((item) => {
        if (item.color.sizes) {
          valueOfProducts += item.color.sizes[Object.keys(item.color.sizes)[0]].price * item.quantity;
        }
      });
    return valueOfProducts.toFixed(1);
  };

  const valueToPay = () => {
    const valueOfProducts = Number(sumValueOfProducts());
    if (discount?.value) {
      return (valueOfProducts - valueOfProducts * (discount.value / 100)).toFixed(2);
    } else {
      return valueOfProducts;
    }
  };
  return (
    <>
      {shoppingCart && shoppingCart.items.length > 0 && (
        <div className="w-1/4">
          <p className="text-2xl font-semibold mb-3">Summary</p>
          <div className="flex flex-col gap-4 bg-slate-700 text-slate-300 p-5 pb-0">
            <div className="flex justify-between">
              <p>Value of products:</p>
              <div className="flex gap-1 text-slate-100">
                <p>{sumValueOfProducts()}</p>
                <p>{shoppingCart.items[0].currency}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Discout value:</p>
              <div className="flex gap-1 text-slate-100">
                <p>{discount ? discount.value : 0}</p>
                <p>%</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Cost of delivery:</p>
              <div className="flex gap-1 text-slate-100">
                <p>0</p>
                <p>{shoppingCart.items[0].currency}</p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-slate-100">
              <p>To pay:</p>
              <div className="flex gap-1 text-2xl">
                <p>{valueToPay()}</p>
                <p>{shoppingCart.items[0].currency}</p>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
          <div className="flex flex-col bg-slate-700 text-slate-300 p-5 pt-0">
            {discount === null && isDiscountOpen ? (
              <p className="text-red-600 text-sm h-4">Incorrect code</p>
            ) : (
              <div className="h-4 w-1"></div>
            )}
            <div className="mb-3 text-slate-100">
              {isDiscountOpen ? (
                <div className=" flex  gap-3">
                  <div className="flex items-center focus-within:border-[1px] border-slate-300 w-full">
                    <input
                      className="p-1 text-black focus-visible:outline-none w-full"
                      ref={discountRef}
                    ></input>
                    <button
                      className="text-black bg-white h-8"
                      onClick={() => setIsDiscountOpen(false)}
                    >
                      <X />
                    </button>
                  </div>
                  <button
                    className="border border-slate-300 p-1 w-24"
                    onClick={() => {
                      discountRef.current && fetchDiscount(discountRef.current.value);
                      if (discount === null) {
                        setIsDiscountOpen(false);
                      }
                    }}
                  >
                    Use code
                  </button>
                </div>
              ) : (
                <button
                  className="flex gap-3 h-[34px]"
                  onClick={() => setIsDiscountOpen(true)}
                >
                  <PercentSquare />
                  <p>I've a discount</p>
                </button>
              )}
            </div>
            <Link
              to="/checkout/login"
              className="py-2 px-3 text-center border-blue-500 bg-blue-900 text-slate-100"
            >
              Go to the checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSummary;
