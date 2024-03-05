import { Breadcrumbs, NavBar } from '@/components';
import Carousel from '@/components/Carousel';
import DetailsInfo from '@/components/DetailsInfo';
import ProductInfo from '@/components/ProductInfo';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import useProduct from '@/hooks/useProduct';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from 'types';

const Product = () => {
  const [detailsInfoState, setDetailsInfoState] = useState(0);
  const { id } = useParams();
  const product: Product | undefined = useProduct(id);

  return (
    <div className="h-full">
      <NavBar />
      <Breadcrumbs />
      <div className="mt-24 flex">
        <div className="flex gap-5 p-6 w-full">
          <Carousel
            category={product?.category.name}
            type={product?.type.display_name}
            path={product?.images}
          />
          <div className="w-2/5">
            <ProductInfo
              product={product}
              setDetailsInfoState={setDetailsInfoState}
            />
          </div>
        </div>
      </div>
      <div>
        <DetailsInfo
          detailsInfoState={detailsInfoState}
          setDetailsInfoState={setDetailsInfoState}
          description={product?.description}
          type={product?.type.display_name}
        />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Product;
