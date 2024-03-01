import { Breadcrumbs, NavBar } from '@/components';
import DetailsInfo from '@/components/DetailsInfo';
import ProductInfo from '@/components/ProductInfo';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import useProduct from '@/hooks/useProduct';
import { useParams } from 'react-router-dom';
import { Product } from 'types';

const Product = () => {
  const { id } = useParams();
  const product: Product | undefined = useProduct(id);

  return (
    <div className="h-full">
      <NavBar />
      <Breadcrumbs />
      <div className="mt-24 flex">
        <div className="flex gap-5 p-6 w-full">
          <div>
            {product?.images.map((image) => (
              <div key={image}>
                <button>
                  <img
                    width={80}
                    src={`/${product.category.name}/${product.type.display_name}/${image}`}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <button>
              <img
                width={480}
                src={`/${product?.category.name}/${product?.type.display_name}/${product?.images[0]}`}
              />
            </button>
            <button>
              <img
                width={480}
                src={`/${product?.category.name}/${product?.type.display_name}/${product?.images[1]}`}
              />
            </button>
          </div>
          <div className="w-2/5">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <div>
        <DetailsInfo
          description={product?.description}
          type={product?.type.name}
        />
      </div>
      <ScrollToTopButton />
      {/* <pre>
        <code>{JSON.stringify(product, null, 2)}</code>
      </pre> */}
    </div>
  );
};

export default Product;
