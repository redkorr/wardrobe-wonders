import { NavBar } from '@/components';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { sex, category } = useParams();
  return (
    <div>
      <NavBar />
      {sex},{category}
    </div>
  );
};

export default Products;
