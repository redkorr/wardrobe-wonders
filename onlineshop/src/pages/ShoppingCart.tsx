import { NavBar } from '@/components';
import {
  decrementShoppingCartItemQuantity,
  deleteShoppingCartItem,
  incrementShoppingCartItemQuantity
} from '@/features/shoppingCartSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Minus, Plus, X } from 'lucide-react';

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  // const [isDiscountOpen, setIsDiscountOpen] = useState(false);

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

  // const valueToPay = () => {};
  return (
    <div>
      <NavBar />
      <div className=" flex m-8 mt-32 gap-8 font-medium">
        <div className="w-3/4">
          <div className="flex items-center gap-2 font-semibold">
            <p className="text-2xl">Shopping Cart</p>
            <div className="flex justify-center items-center w-6 h-6 border rounded-full">
              <p className="text-lg">{shoppingCart.count}</p>
            </div>
          </div>
          <div>
            <hr className="my-3" />
            {!shoppingCart || (shoppingCart.items.length === 0 && <div>dupa</div>)}
            {shoppingCart &&
              shoppingCart.items.length > 0 &&
              shoppingCart.items.map((shoppingCartItem, index) => (
                <div key={index}>
                  <div
                    className="relative flex"
                    key={shoppingCartItem.color.images && shoppingCartItem.color.images[0]}
                  >
                    <img
                      className="mr-10"
                      width={120}
                      src={
                        shoppingCartItem.color.images
                          ? `/${shoppingCartItem.category.name}/${shoppingCartItem.type.name}${shoppingCartItem.color.images[0]}`
                          : '/onlineshop/public/placeholder-image.png'
                      }
                      alt={shoppingCartItem.color.name}
                    />
                    <div>
                      <p className="text-lg font-semibold mb-6">{shoppingCartItem.color.name}</p>
                      <div className="flex gap-40">
                        <div>
                          <p className="mb-3">Size</p>
                          <p>{shoppingCartItem.color.sizes && Object.keys(shoppingCartItem.color.sizes)}</p>
                        </div>
                        <div>
                          <p className="mb-3">Color</p>
                          <p>{shoppingCartItem.color.color_name}</p>
                        </div>
                        <div>
                          <p className="mb-3">Quantity</p>
                          <div className="flex gap-2">
                            <button
                              className="flex justify-center items-center border w-6 h-6"
                              onClick={() => {
                                if (shoppingCartItem.shopping_cart_id)
                                  dispatch(decrementShoppingCartItemQuantity(shoppingCartItem.shopping_cart_id));
                              }}
                            >
                              <Minus className="w-5 h-5" />
                            </button>
                            <p>{shoppingCartItem.quantity}</p>
                            <button
                              className="flex justify-center items-center border w-6 h-6"
                              onClick={() => {
                                if (shoppingCartItem.shopping_cart_id)
                                  dispatch(incrementShoppingCartItemQuantity(shoppingCartItem.shopping_cart_id));
                              }}
                            >
                              <Plus className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="mb-3">Price</p>
                          <div className="flex gap-1">
                            <p>
                              {shoppingCartItem.color.sizes &&
                                shoppingCartItem.color.sizes[Object.keys(shoppingCartItem.color.sizes)[0]].price}
                            </p>
                            <p>{shoppingCartItem.currency}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-10 items-center right-0 text-2xl">
                      <p className="mr-1">
                        {shoppingCartItem.color.sizes &&
                          shoppingCartItem.color.sizes[Object.keys(shoppingCartItem.color.sizes)[0]].price *
                            shoppingCartItem.quantity}
                      </p>
                      <p>{shoppingCartItem.currency}</p>
                      <button
                        onClick={() => {
                          if (shoppingCartItem.shopping_cart_id)
                            dispatch(deleteShoppingCartItem(shoppingCartItem.shopping_cart_id));
                        }}
                      >
                        <X className="ml-4" />
                      </button>
                    </div>
                  </div>
                  <hr className="my-3"></hr>
                </div>
              ))}
          </div>
        </div>
        {shoppingCart && shoppingCart.items.length > 0 && (
          <div className="w-1/4">
            <p className="text-2xl font-semibold mb-3">Summary</p>
            <div className="flex flex-col gap-4 bg-slate-700 text-slate-300 p-5">
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
                  <p>0</p>
                  <p>{shoppingCart.items[0].currency}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Cost of delivery:</p>
                <div className="flex gap-1 text-slate-100">
                  <p>0</p>
                  <p>{shoppingCart.items[0].currency}</p>
                </div>
              </div>
              <hr className="my-3"></hr>
              <div className="flex justify-between text-slate-100">
                <p>To pay:</p>
                <div className="flex gap-1 text-2xl">
                  <p>0</p>
                  <p>{shoppingCart.items[0].currency}</p>
                </div>
              </div>
              <hr className="my-3"></hr>
              {/* <div className="mb-3 text-slate-100">
              {isDiscountOpen ? (
                <div>
                  <input className=""></input>
                  <button className="text-black">
                    <X />
                  </button>
                  <button className="border p-2">Use code</button>
                </div>
              ) : (
                <button
                  className="flex gap-3"
                  onClick={() => setIsDiscountOpen(true)}
                >
                  <PercentSquare />
                  <p>I've a discount</p>
                </button>
              )}
            </div> */}
              <button className="py-2 px-3 border-blue-500 bg-blue-900 text-slate-100">Go to the checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
