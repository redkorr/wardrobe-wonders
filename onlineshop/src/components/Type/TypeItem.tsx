import { Link } from 'react-router-dom';
import { ProductType } from 'types';

interface TypeItemProps {
  sex: string;
  categoryName: string;
  type: ProductType;
}

const TypesItem = ({ sex, type, categoryName }: TypeItemProps) => {
  return (
    <p
      className="pl-6 py-1"
      key={type.name}
    >
      <Link to={`/products/${sex}/${categoryName}/${type.name}`}>{type.name}</Link>
    </p>
  );
};

export default TypesItem;
