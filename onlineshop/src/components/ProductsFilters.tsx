import { SetURLSearchParams } from 'react-router-dom';
import { FilterDropDown } from '.';

interface ProductsFiltersProps {
  searchParams: [URLSearchParams, SetURLSearchParams];
}

const ProductsFilters = ({ searchParams }: ProductsFiltersProps) => {
  const [params, setParams] = searchParams;

  return (
    <div className="py-3">
      <FilterDropDown />
    </div>
  );
};

export default ProductsFilters;
