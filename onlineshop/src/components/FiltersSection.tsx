import { Breadcrumbs, ProductsHeader } from '.';
import ProductsFilters from './ProductsFilters';

interface FilterSectionProps {
  numberOfProducts: number | undefined;
  sex: string | undefined;
  category: string | undefined;
  type: string | undefined;
}
const FiltersSection = ({ numberOfProducts, sex, category, type }: FilterSectionProps) => {
  return (
    <div className="p-3 flex flex-col gap-2">
      <Breadcrumbs />
      <ProductsHeader
        numberOfProducts={numberOfProducts}
        sex={sex}
      />
      <ProductsFilters
        category={category}
        type={type}
      />
    </div>
  );
};

export default FiltersSection;
