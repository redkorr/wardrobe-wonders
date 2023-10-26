import { NavBar } from '@/components';
import LINKS from '@/utils/linkPaths';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="h-full pt-[74px] flex">
        <Link
          className="flex w-1/2 h-full text-8xl bg-rose-600 justify-center items-center"
          to={LINKS.productsHer}
        >
          Her
        </Link>

        <Link
          className="flex w-1/2 h-full text-8xl bg-cyan-300 justify-center items-center"
          to={LINKS.productsHis}
        >
          His
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
