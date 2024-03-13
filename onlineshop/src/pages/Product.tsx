import { Breadcrumbs, NavBar } from '@/components';
import Carousel from '@/components/Carousel';
import DetailsInfo from '@/components/DetailsInfo';
import ProductInfo from '@/components/ProductInfo';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import useProduct from '@/hooks/useProduct';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Product } from 'types';

const Product = () => {
  const [detailsInfoState, setDetailsInfoState] = useState(0);
  const [indexOfFoundColor, setIndexOfFoundColor] = useState(0);
  const { id } = useParams();
  const product: Product | undefined = useProduct(id);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const colorName = pathname.split('/').slice(1)[2];

  const selectColor = (selectedColor: string) => {
    if (product?.colors && product?.colors.length > 0) {
      const foundColor = product?.colors.find((color) => color.color_name === selectedColor) || product?.colors[0];
      setIndexOfFoundColor(product?.colors.indexOf(foundColor));
      const path = window.location.pathname.split('/');
      path.splice(window.location.pathname.split('/').length - 1, 1, foundColor.color_name);
      navigate(path.toString().replaceAll(',', '/'));
    }
  };
  useEffect(() => {
    selectColor(colorName);
  }, []);

  return (
    <div className="h-full">
      <NavBar />
      <Breadcrumbs />
      <div className="mt-24 flex">
        <div className="flex gap-5 p-6 w-full">
          <Carousel
            category={product?.category.name}
            type={product?.type.display_name}
            paths={product?.colors[indexOfFoundColor].images}
          />
          <div className="w-2/5">
            <ProductInfo
              product={product}
              setDetailsInfoState={setDetailsInfoState}
              indexOfFoundColor={indexOfFoundColor}
              selectColor={selectColor}
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
