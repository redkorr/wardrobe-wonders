import { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Product } from 'types';

interface ProductButtonProps {
  product: Product;
}

const ProductButton = ({ product }: ProductButtonProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const searchParams = useSearchParams();
  const [params] = searchParams;

  const onHover = (product: Product, colorPath: string) => {
    if (imageRef.current) {
      imageRef.current.src = `/${product.category.name}/${product.type.display_name}/${colorPath}`;
    }
  };
  return params.has('color') ? (
    <div>
      {product.colors?.map(
        (item) =>
          params.get('color')?.split(',').includes(item.color_name) && (
            <div
              key={item.item_id}
              className="w-[360px] relative"
            >
              <Link to={`/product/${product.product_id}/${item.color_name}`}>
                <img
                  ref={imageRef}
                  width={360}
                  height={540}
                  src={`/${product.category.name}/${product.type.display_name}/${item.images[0]}`}
                />
              </Link>
              <Link
                to={`/product/${product.product_id}/${item.color_name}`}
                className="truncate text-lg mt-3"
              >
                <p className="truncate text-lg mt-3">{product.colors[0].name}</p>
              </Link>
              <div className="flex gap-2 absolute bottom-12 left-2">
                {product.colors.map((color) => (
                  <Link
                    onMouseOver={() => onHover(product, color.images[0])}
                    key={color.color_name}
                    to={`/product/${product.product_id}/${color.color_name}`}
                    style={
                      color.color_name === 'Multicolor'
                        ? { backgroundImage: `url(${color.color})`, backgroundSize: 'cover' }
                        : { backgroundColor: `${color.color}` }
                    }
                    className="h-10 w-10 rounded-full relative"
                  >
                    <div className="w-9 h-9 z-0 absolute top-[2px] right-[2px] border-2 border-white rounded-full "></div>
                    <img
                      src="/public/fabric.png"
                      className="opacity-30 rounded-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  ) : (
    <div
      key={product.colors[0].item_id}
      className="w-[360px] relative"
    >
      <Link to={`/product/${product.product_id}/${product.colors[0].color_name}`}>
        <img
          ref={imageRef}
          width={360}
          height={540}
          src={`/${product.category.name}/${product.type.display_name}/${product.colors[0].images[0]}`}
        />
      </Link>
      <Link to={`/product/${product.product_id}/${product.colors[0].color_name}`}>
        <p className="truncate text-lg mt-3">{product.colors[0].name}</p>
      </Link>
      <div className="flex gap-2 absolute bottom-12 left-2">
        {product.colors.map((color) => (
          <Link
            onMouseOver={() => onHover(product, color.images[0])}
            key={color.color_name}
            to={`/product/${product.product_id}/${color.color_name}`}
            style={
              color.color_name === 'Multicolor'
                ? { backgroundImage: `url(${color.color})`, backgroundSize: 'cover' }
                : { backgroundColor: `${color.color}` }
            }
            className="h-10 w-10 rounded-full relative"
          >
            <div className="w-9 h-9 z-0 absolute top-[2px] right-[2px] border-2 border-white rounded-full "></div>
            <img
              src="/public/fabric.png"
              className="opacity-30 rounded-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductButton;
