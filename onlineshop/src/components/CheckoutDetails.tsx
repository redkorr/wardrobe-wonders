import { useAppSelector } from '@/hooks/useAppSelector';
import useDiscount from '@/hooks/useDiscount';
import { PercentSquare, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import usePayment from '@/hooks/usePayment';

interface SummaryProps {
  buttonText: string;
  path?: string;
  orderId: string;
}

const CheckoutDetails = ({ buttonText, path, orderId }: SummaryProps) => {
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const { updateDiscount, discount } = useDiscount();
  const discountRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const { getClientSecret } = usePayment(orderId);

  return (
    <>
      {shoppingCart && shoppingCart.items.length > 0 && (
        <div className="w-1/4 ">
          <div className="sticky top-32">
            <p className="text-2xl font-semibold mb-3">Summary</p>
            <div className="flex flex-col gap-4 bg-slate-700 text-slate-300 p-5 pb-0">
              <div className="flex justify-between">
                <p>Value of products:</p>
                <div className="flex gap-1 text-slate-100">
                  <p>{shoppingCart.items_price}</p>
                  <p>{shoppingCart.items[0].currency}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Discount value:</p>
                <div className="flex gap-1 text-slate-100">
                  <p>{discount ? discount.value : 0}</p>
                  <p>%</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Delivery cost:</p>
                <div className="flex gap-1 text-slate-100">
                  <p>{shoppingCart.delivery_cost}</p>
                  <p>{shoppingCart.items[0].currency}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Payment cost:</p>
                <div className="flex gap-1 text-slate-100">
                  <p>{shoppingCart.payment_cost}</p>
                  <p>{shoppingCart.items[0].currency}</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-slate-100">
                <p>To pay:</p>
                <div className="flex gap-1 text-2xl">
                  <p>{shoppingCart.total_value}</p>
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
                      onClick={async () => {
                        if (discountRef.current) {
                          await updateDiscount(discountRef.current.value);
                        }

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
                    <p>I have a discount</p>
                  </button>
                )}
              </div>
              <SignedIn>
                <button
                  form="checkout-form"
                  type="submit"
                  onClick={() => {
                    if (path) {
                      navigate(`../${path}`);
                    }
                  }}
                  className="py-2 px-3 text-center border border-blue-500 bg-blue-900 text-slate-100"
                >
                  {buttonText}
                </button>
              </SignedIn>
              <SignedOut>
                <button
                  form="checkout-form"
                  type="submit"
                  className="py-2 px-3 text-center border border-blue-500 bg-blue-900 text-slate-100"
                  onClick={async () => {
                    const response = await getClientSecret();
                    window.location.href = response.session.url;
                  }}
                >
                  {buttonText}
                </button>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutDetails;
