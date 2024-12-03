import { Breadcrumbs, Carousel, DetailsInfo, ProductInfo, ScrollToTop } from '@/components';
import useProduct from '@/hooks/useProduct';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Product as ProductType } from 'types';

const Product = () => {
  const [detailsInfoState, setDetailsInfoState] = useState(0);
  const { id } = useParams();
  const product: ProductType | undefined = useProduct(id);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const colorName = pathname.split('/')[3];

  if (!product) {
    return <div>empty</div>;
  }
  const selectColor = (selectedColor: string) => {
    if (!product.colors.length) {
      return;
    }
    const foundColor = product.colors.find((color) => color.color_name === selectedColor) || product.colors[0];
    const newPath = updatePathname(foundColor.color_name);
    navigate(newPath);
  };
  const updatePathname = (newColor: string): string => {
    const pathParts = pathname.split('/');
    pathParts.splice(3, 1, newColor);
    return pathParts.join('/');
  };

  return (
    <div className="h-full">
      <Breadcrumbs />
      <div className="mt-24 flex">
        <div className="flex gap-5 p-6 w-full">
          <Carousel
            category={product?.category.name}
            type={product?.type.display_name}
            paths={
              product?.colors[
                product?.colors.indexOf(
                  product?.colors.find((color) => color.color_name === colorName) || product?.colors[0]
                )
              ].images
            }
          />
          <div className="w-2/5">
            <ProductInfo
              product={product}
              setDetailsInfoState={setDetailsInfoState}
              color={product?.colors.find((color) => color.color_name === colorName) || product?.colors[0]}
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
      <ScrollToTop />
    </div>
  );
};
export default Product;
