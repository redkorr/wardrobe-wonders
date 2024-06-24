import { FiltersSection, NavBar, CategoriesAccordion, ProductButton, LimitButtons, Pagination } from '@/components';
import useProducts from '@/hooks/useProducts';
import undraw_void from '@/assets/undraw_void.svg';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addFilter, setMaxPriceFilter, setMinPriceFilter } from '@/features/filterSlice';
import ScrollToTopButton from '@/components/ScrollToTop';
import { setLimit, setPage } from '@/features/paginationSlice';

const Products = () => {
  const { sex, category, type } = useParams();
  const searchParams = useSearchParams();
  const [params] = searchParams;
  const products = useProducts(sex, category, type, params);
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
    if (params.has('page')) {
      dispatch(setPage(Number(params.get('page'))));
    } else {
      dispatch(setPage(1));
    }
    if (params.has('limit')) {
      dispatch(setLimit(Number(params.get('limit'))));
    }
  }, [products]);

  return (
    <div className="pt-24 w-full">
      <NavBar />
      <div className="flex flex-row w-full">
        <CategoriesAccordion
          sex={sex}
          activeCategory={category}
        />
        <div className="flex flex-col px-10 w-full">
          <FiltersSection
            numberOfProducts={products?.count}
            sex={sex}
            category={category}
            type={type}
          />

          {products?.count === 0 && (
            <div className="flex w-full justify-center items-center">
              <img
                src={undraw_void}
                alt="No products"
                className=" w-80 h-80"
              />
            </div>
          )}
          <div className="flex">
            <LimitButtons />
            <Pagination numberOfPages={products?.numberOfPages} />
          </div>

          <div className="flex flex-wrap gap-14">
            {products?.data?.map((product) => <ProductButton product={product} />)}
          </div>
          <Pagination numberOfPages={products?.numberOfPages} />
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Products;
