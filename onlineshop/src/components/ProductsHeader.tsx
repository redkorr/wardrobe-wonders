import { useLocation } from 'react-router-dom';

interface ProductsHeaderProps {
  numberOfProducts: number | undefined;
  sex: string | undefined;
}

const ProductsHeader = ({ numberOfProducts, sex }: ProductsHeaderProps) => {
  const { pathname } = useLocation();
  const lastPathParam = pathname.split('/');
  return (
    <div className="flex items-center gap-x-2">
      <h1 className="text-3xl">
        {sex === 'his' && 'Male ' + `${lastPathParam[lastPathParam.length - 1]}`}
        {sex === 'her' && 'Female ' + `${lastPathParam[lastPathParam.length - 1]}`}
      </h1>
      <p>(Number of products: {numberOfProducts})</p>
    </div>
  );
};

export default ProductsHeader;
