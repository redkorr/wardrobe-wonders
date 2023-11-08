import { FiltersSection, NavBar } from '@/components';
import { CategoriesAccordion } from '@/components';
import useProducts from '@/hooks/useProducts';
import undraw_void from '@/assets/undraw_void.svg';
import { useParams, useSearchParams } from 'react-router-dom';
import { Product } from 'types';

const Products = () => {
  const { sex, category, type } = useParams();

  const searchParams = useSearchParams();

  const products: Array<Product> | undefined = useProducts(sex, category, type);
  return (
    <div className="pt-24 w-full">
      <NavBar />
      <div className="flex flex-row ">
        <CategoriesAccordion
          sex={sex}
          activeCategory={category}
        />
        <div className="flex flex-col px-10">
          <FiltersSection
            numberOfProducts={products?.length}
            sex={sex}
            searchParams={searchParams}
          />
          {products?.length === 0 && (
            <div className="flex w-full justify-center items-center">
              <img
                src={undraw_void}
                alt="No products"
                className=" w-80 h-80"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-14">
            {products?.map((product) => (
              <div
                key={product.product_id}
                className="w-[360px]"
              >
                <img
                  width={360}
                  height={540}
                  src={`/${product.category.name}/${product.type.display_name}/${product.images[0]}`}
                />
                <h2 className="truncate text-lg mt-3">{product.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
