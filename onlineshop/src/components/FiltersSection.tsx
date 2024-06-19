import { Breadcrumbs, ProductsFilters, ProductsHeader } from '.';
import FilterPills from './FilterPills';

interface FilterSectionProps {
  numberOfProducts: number | undefined;
  sex: string | undefined;
  category: string | undefined;
  type: string | undefined;
}
const FiltersSection = ({ numberOfProducts, sex, category, type }: FilterSectionProps) => {
  return (
    <div className="p-3 flex flex-col">
      <Breadcrumbs />
      <ProductsHeader
        numberOfProducts={numberOfProducts}
        sex={sex}
      />
      <ProductsFilters
        category={category}
        type={type}
      />
      <FilterPills />
    </div>
  );
};

export default FiltersSection;
