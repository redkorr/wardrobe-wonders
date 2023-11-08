import { SetURLSearchParams } from 'react-router-dom';
import { Breadcrumbs, ProductsHeader } from '.';
import ProductsFilters from './ProductsFilters';

interface FilterSectionProps {
  numberOfProducts: number | undefined;
  sex: string | undefined;
  searchParams: [URLSearchParams, SetURLSearchParams];
}
const FiltersSection = ({ numberOfProducts, sex, searchParams }: FilterSectionProps) => {
  return (
    <div className="p-3 flex flex-col gap-2">
      <Breadcrumbs />
      <ProductsHeader
        numberOfProducts={numberOfProducts}
        sex={sex}
      />
      <ProductsFilters searchParams={searchParams} />
    </div>
  );
};

export default FiltersSection;
