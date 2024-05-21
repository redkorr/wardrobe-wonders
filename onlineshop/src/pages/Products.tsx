import { FiltersSection, NavBar, CategoriesAccordion } from '@/components';
import useProducts from '@/hooks/useProducts';
import undraw_void from '@/assets/undraw_void.svg';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Product } from 'types';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addFilter, setMaxPriceFilter, setMinPriceFilter } from '@/features/filterSlice';
import ScrollToTopButton from '@/components/ScrollToTop';

const Products = () => {
  const { sex, category, type } = useParams();

  const searchParams = useSearchParams();

  const [params] = searchParams;

  const products: Array<Product> | undefined = useProducts(sex, category, type, params);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.has('color')) {
      params
        .get('color')
        ?.split(',')
        .forEach((color) => {
          dispatch(addFilter({ parentKey: 'colors', childKey: color }));
        });
    }
    if (params.has('size')) {
      params
        .get('size')
        ?.split(',')
        .forEach((size) => {
          dispatch(addFilter({ parentKey: 'sizes', childKey: size }));
        });
    }
    if (params.has('min')) {
      dispatch(setMinPriceFilter(Number(params.get('min'))));
    }
    if (params.has('max')) {
      dispatch(setMaxPriceFilter(Number(params.get('max'))));
    }
  }, [products]);

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
            category={category}
            type={type}
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
            {params.has('color')
              ? products?.map(
                  (product) =>
                    product.colors?.map(
                      (item) =>
                        params.get('color')?.split(',').includes(item.color_name) && (
                          <div
                            key={item.item_id}
                            className="w-[360px]"
                          >
                            <Link to={`/product/${product.product_id}/${item.color_name}`}>
                              <img
                                width={360}
                                height={540}
                                src={`/${product.category.name}/${product.type.display_name}/${item.images[0]}`}
                              />
                            </Link>
                            <Link
                              to={`/product/${product.product_id}/${item.color_name}`}
                              className="truncate text-lg mt-3"
                            >
                              {item.name}
                            </Link>
                          </div>
                        )
                    )
                )
              : products?.map(
                  (product) =>
                    product.colors?.map((item) => (
                      <div
                        key={item.item_id}
                        className="w-[360px]"
                      >
                        <Link to={`/product/${product.product_id}/${item.color_name}`}>
                          <img
                            width={360}
                            height={540}
                            src={`/${product.category.name}/${product.type.display_name}/${item.images[0]}`}
                          />
                        </Link>
                        <Link to={`/product/${product.product_id}/${item.color_name}`}>
                          <p className="truncate text-lg mt-3">{item.name}</p>
                        </Link>
                      </div>
                    ))
                )}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Products;
