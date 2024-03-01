import { ChevronDown, ChevronUp, Shirt, ShoppingCart, Truck, Undo2 } from 'lucide-react';
import { useState } from 'react';
import { Product } from 'types';

interface ProductInfoParams {
  product: Product | undefined;
}

const ProductInfo = ({ product }: ProductInfoParams) => {
  const [selectedValue, setSelectedValue] = useState<string>('M');
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-3/4 p-6 mt-6 mx-auto">
      <h1 className="text-3xl mb-10">{product?.name}</h1>
      <h2 className="text-2xl mb-10">
        {product?.sizes && product.sizes[selectedValue].price}&nbsp;
        {product?.currency}
      </h2>
      <div className="flex gap-2 mb-10">
        <div className="w-10 h-10 bg-black rounded-3xl"></div>
        <div className="w-10 h-10 bg-black rounded-3xl"></div>
      </div>
      <button
        className="flex justify-between items-center text-base border border-slate-800 w-full py-2 px-3 mb-6"
        onClick={() => setIsActive(!isActive)}
      >
        <p>{product?.sizes && selectedValue}</p> {isActive ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div className="relative -top-6">
        {isActive && (
          <div className="flex flex-col z-10 absolute top-1 left-0 w-full bg-white mt-2 border px-2">
            {product &&
              Object.keys(product.sizes).map((size) => (
                <button
                  className="p-2 border-b text-left"
                  disabled={product.sizes[size].stock <= 0}
                  key={size}
                  onClick={() => {
                    setSelectedValue(size);
                    setIsActive(!isActive);
                  }}
                >
                  {size}
                  {product.sizes[size].stock <= 0 && <p>(Out of Stock)</p>}
                </button>
              ))}
          </div>
        )}
      </div>
      <button className="flex py-2 px-3 mb-10 border border-blue-500 bg-blue-900 text-white w-full">
        <ShoppingCart className="absolute" />
        <p className="m-auto">Add to cart</p>
      </button>
      <div className="flex justify-center flex-wrap gap-4">
        <button className="flex items-center gap-3 m-3 text-lg">
          <Shirt />
          Product details
        </button>
        <button className="flex items-center gap-3 m-3 text-lg">
          <Truck />
          Shipping in up to 30 days
        </button>
        <button className="flex items-center gap-3 m-3 text-lg">
          <Undo2 />
          30 days to return
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
