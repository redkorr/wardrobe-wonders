import useCategories from '@/hooks/useCategories';
import LINKS from '@/utils/linkPaths';
import { UserButton, useAuth, useSignIn } from '@clerk/clerk-react';
import { ShoppingCart } from 'lucide-react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Category } from 'types';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const { isLoaded } = useSignIn();
  const { sex } = useParams();

  const categories: Array<Category> | undefined = useCategories();

  return (
    <nav className="z-50 fixed top-0 flex items-center w-full p-6 border border-red-600 justify-between">
      <div className="text-3xl font-bold">Wardrobe Wonders</div>
      <div className="text-2xl font-semibold">
        {sex?.toLocaleLowerCase() === 'his' ? (
          <Link to={LINKS.productsHer}>Her</Link>
        ) : (
          <Link to={LINKS.productsHis}>His</Link>
        )}
      </div>
      <div>
        {categories?.map((category) => (
          <NavLink to={`${LINKS.products}/${sex}/${category.name}`}>{category.name}</NavLink>
        ))}
      </div>
      <div className="flex gap-4">
        {!isSignedIn && isLoaded ? (
          <Link to={LINKS.checkoutLogin}>Sign In</Link>
        ) : (
          <UserButton
            showName
            afterSignOutUrl="/"
          />
        )}
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
