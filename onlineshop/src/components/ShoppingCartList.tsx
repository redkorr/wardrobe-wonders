import {
  decrementShoppingCartItemQuantity,
  deleteShoppingCartItem,
  incrementShoppingCartItemQuantity
} from '@/features/shoppingCartSlice';
import { Minus, Plus, X } from 'lucide-react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import empty_cart from '../assets/undraw_empty_cart.svg';
import buildPlaceholderImageUrl from '@/utils/buildPlaceholderImageUrl';
import { Link } from 'react-router-dom';

const ShoppingCartList = () => {
  const dispatch = useAppDispatch();
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const count = useAppSelector((state) => state.shoppingCart.count);

  return (
    <div className="w-3/4">
      <div className="flex items-center gap-2 font-semibold">
        <p className="text-2xl">Shopping Cart</p>
        <div className="flex justify-center items-center w-6 h-6 border rounded-full">
          <p className="text-lg">{shoppingCart.count}</p>
        </div>
      </div>
      {shoppingCart && count > 0 ? (
        <div>
          <hr className="my-3" />
          {shoppingCart &&
            shoppingCart.items.length > 0 &&
            shoppingCart.items.map((shoppingCartItem, index) => (
              <div key={index}>
                <Link
                  className="relative flex w-full text-left"
                  key={shoppingCartItem.color.images && shoppingCartItem.color.images[0]}
                  to={`/product/${shoppingCartItem.product_id}/${shoppingCartItem.color.color_name}`}
                >
                  <img
                    className="mr-10"
                    width={120}
                    src={
                      shoppingCartItem.color.color &&
                      shoppingCartItem.color.images &&
                      buildPlaceholderImageUrl(
                        shoppingCartItem.color.color,
                        shoppingCartItem.color.images[0],
                        '120x120'
                      )
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
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (shoppingCartItem.shopping_cart_id)
                                dispatch(decrementShoppingCartItemQuantity(shoppingCartItem.shopping_cart_id));
                            }}
                          >
                            <Minus className="w-5 h-5 hover:text-slate-600 transition duration-200 ease-in-out" />
                          </button>
                          <p>{shoppingCartItem.quantity}</p>
                          <button
                            className="flex justify-center items-center border w-6 h-6"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (shoppingCartItem.shopping_cart_id)
                                dispatch(incrementShoppingCartItemQuantity(shoppingCartItem.shopping_cart_id));
                            }}
                          >
                            <Plus className="w-5 h-5 hover:text-slate-600 transition duration-200 ease-in-out" />
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
                        (
                          shoppingCartItem.color.sizes[Object.keys(shoppingCartItem.color.sizes)[0]].price *
                          shoppingCartItem.quantity
                        )
                          .toString()
                          .slice(0, 6)}
                    </p>
                    <p>{shoppingCartItem.currency}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (shoppingCartItem.shopping_cart_id)
                          dispatch(deleteShoppingCartItem(shoppingCartItem.shopping_cart_id));
                      }}
                    >
                      <X className="ml-4 hover:text-slate-600 transition duration-200 ease-in-out" />
                    </button>
                  </div>
                </Link>
                <hr className="my-3" />
              </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={empty_cart}
            alt="person with empty shopping cart"
          />
        </div>
      )}
    </div>
  );
};

export default ShoppingCartList;
