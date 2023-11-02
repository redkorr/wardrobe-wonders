import useCategories from '@/hooks/useCategories';
import { Category } from 'types';
import { CategoryItem } from '..';

interface CategoriesAccordionProps {
  sex: string | undefined;
  activeCategory: string | undefined;
}

const CategoriesAccordion = ({ sex = 'her', activeCategory }: CategoriesAccordionProps) => {
  const categories: Array<Category> | undefined = useCategories();

  return (
    <div className="m-5">
      {categories?.map((category: Category) => (
        <CategoryItem
          sex={sex}
          category={category}
          active={activeCategory === category.name}
          key={category.name}
        />
      ))}
    </div>
  );
};

export default CategoriesAccordion;
