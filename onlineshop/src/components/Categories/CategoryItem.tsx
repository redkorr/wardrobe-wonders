import { Link } from 'react-router-dom';
import { Category } from 'types';
import { TypeItem } from '..';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PlusIcon, MinusIcon } from 'lucide-react';

interface CategoryItemProps {
  category: Category;
  sex: string;
  active: boolean;
}

const CategoryItem = ({ category, sex, active = false }: CategoryItemProps) => {
  const [collapsed, setCollapsed] = useState(active);
  const { pathname } = useLocation();

  const { name, types } = category;

  useEffect(() => {
    setCollapsed(pathname.includes(category.name));
  }, [pathname, active]);

  return (
    <div
      key={name}
      className="py-1"
    >
      <div className="flex flex-row items-center gap-x-1">
        <Link
          to={`/products/${sex}/${name}`}
          className="text-2xl"
        >
          {name}
        </Link>
        <button
          className="flex items-center"
          onClick={() => setCollapsed((prevState) => !prevState)}
        >
          {collapsed ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      {collapsed &&
        types.map((type) => (
          <TypeItem
            key={type.name}
            sex={sex}
            categoryName={name}
            type={type}
          />
        ))}
    </div>
  );
};

export default CategoryItem;
