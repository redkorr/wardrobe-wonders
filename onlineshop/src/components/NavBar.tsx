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
    <nav className="z-50 fixed top-0 flex items-center w-full p-6 justify-between bg-slate-950">
      <div className="text-3xl font-bold text-gray-300">Wardrobe Wonders</div>
      <div className="text-2xl font-semibold text-gray-300">
        {sex?.toLocaleLowerCase() === 'his' && <NavLink to={LINKS.productsHer}>Her</NavLink>}
        {sex?.toLocaleLowerCase() === 'her' && <NavLink to={LINKS.productsHis}>His</NavLink>}
      </div>
      <div>
        {categories?.map((category) => (
          <NavLink
            key={category.name}
            style={({ isActive }) => (isActive ? { fontWeight: 700, color: 'white' } : {})}
            className="px-4 text-lg font-semibold text-gray-300"
            to={`${LINKS.products}/${sex}/${category.name}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-8 text-gray-300">
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
