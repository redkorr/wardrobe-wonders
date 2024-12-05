import { FiltersSection, CategoriesAccordion, ProductButton, LimitButtons, Pagination } from '@/components';
import useProducts from '@/hooks/useProducts';
import undraw_void from '@/assets/undraw_void.svg';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  createFilterItem,
  createFilterItemFromParams,
  setMaxPriceFilter,
  setMinPriceFilter
} from '@/features/filterSlice';
import ScrollToTopButton from '@/components/ScrollToTop';
import { setLimit, setPage } from '@/features/paginationSlice';
import useFilters from '@/hooks/useFilters';

const Products = () => {
  const { sex, category, type } = useParams();
  const searchParams = useSearchParams();
  const [params] = searchParams;
  const products = useProducts(sex, category, type, params);
  const dispatch = useAppDispatch();

  const filters = useFilters(category, type);
  useEffect(() => {
    if (filters) {
      Object.keys(filters).map((filterKey) => {
        if (filterKey === 'prices') {
        } else {
          filters[filterKey as keyof typeof filters].forEach((element: string) => {
            dispatch(createFilterItem({ parentKey: filterKey, childKey: element }));
          });
        }
      });
    }
  }, [products]);
  useEffect(() => {
    if (params.has('color')) {
      params
        .get('color')
        ?.split(',')
        .forEach((color) => {
          dispatch(createFilterItemFromParams({ parentKey: 'colors', childKey: color }));
        });
    }
    if (params.has('size')) {
      params
        .get('size')
        ?.split(',')
        .forEach((size) => {
          dispatch(createFilterItemFromParams({ parentKey: 'sizes', childKey: size }));
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
    <div className="pt-24 w-full h-full">
      <div className="flex flex-row w-full h-full">
        <CategoriesAccordion
          sex={sex}
          activeCategory={category}
        />
        <div className="flex flex-col px-10 w-full h-full">
          <FiltersSection
            numberOfProducts={products?.count}
            sex={sex}
            category={category}
            type={type}
          />

          {products?.count === 0 && (
            <div className="flex flex-col w-full h-full justify-center items-center gap-4">
              <p className="text-4xl font-semibold">No products found</p>
              <img
                src={undraw_void}
                alt="No products"
                className=" w-80 h-80"
              />
            </div>
          )}
          <div className="flex">
            <LimitButtons count={products?.count} />
            <Pagination
              numberOfPages={products?.numberOfPages}
              count={products?.count}
            />
          </div>

          <div className="flex flex-wrap gap-14">
            {products?.data?.map((product) => <ProductButton product={product} />)}
          </div>
          <Pagination
            numberOfPages={products?.numberOfPages}
            count={products?.count}
          />
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Products;
