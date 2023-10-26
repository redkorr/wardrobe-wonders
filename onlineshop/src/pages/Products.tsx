import { NavBar } from '@/components';
import useProducts from '@/hooks/useProducts';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { sex, category } = useParams();

  const products = useProducts(sex, category);

  return (
    <div className="pt-24">
      <NavBar />
      <div className="flex">
        <div className="w-1/6">
          <h2>{category}</h2>
        </div>
        <div className="w-5/6">
          {products?.map((product) => (
            <div key={product.product_id}>
              <img src={`/${product.category.name}/${product.type}/${product.images[0]}`} />
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
