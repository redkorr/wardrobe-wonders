import { useAppSelector } from '@/hooks/useAppSelector';
import useCategories from '@/hooks/useCategories';
import LINKS from '@/utils/linkPaths';
import { UserButton, useAuth, useSignIn } from '@clerk/clerk-react';
import { ShoppingCart } from 'lucide-react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Category } from 'types';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const { isLoaded } = useSignIn();
  const params = useParams();

  const shoppingCartCount = useAppSelector((state) => state.shoppingCart.count);

  const categories: Array<Category> | undefined = useCategories();

  return (
    <nav className="z-50 fixed top-0 flex items-center w-full p-6 justify-between bg-slate-950">
      <Link
        to="/"
        className="text-3xl font-bold text-gray-300"
      >
        Wardrobe Wonders
      </Link>
      <div className="text-2xl font-semibold text-gray-300 hover:text-slate-200 transition duration-200 ease-in-out">
        {params.sex?.toLocaleLowerCase() === 'his' && <NavLink to={LINKS.productsHer}>Her</NavLink>}
        {params.sex?.toLocaleLowerCase() === 'her' && <NavLink to={LINKS.productsHis}>His</NavLink>}
      </div>
      {params.sex && (
        <div>
          {categories?.map((category) => (
            <NavLink
              key={category.name}
              style={({ isActive }) => (isActive ? { fontWeight: 700, color: 'white' } : {})}
              className="px-4 text-lg font-semibold text-gray-300 hover:text-slate-200 transition duration-200 ease-in-out"
              to={`${LINKS.products}/${params.sex}/${category.name}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      )}

      <div className="flex gap-8 text-gray-300">
        {!isSignedIn && isLoaded ? (
          <Link to={LINKS.myAccountLogin}>Sign In</Link>
        ) : (
          <UserButton
            appearance={{
              variables: {
                colorInputText: 'white',
                colorBackground: '#0F52BA',
                colorText: 'white'
              }
            }}
            showName
            afterSignOutUrl="/"
            userProfileMode="navigation"
            userProfileUrl="/my-account"
          />
        )}
        <div>
          <Link
            to={LINKS.shoppingCart}
            className="relative text-slate-100 hover:text-slate-300 transition duration-200 ease-in-out"
          >
            <ShoppingCart />
            {Number(shoppingCartCount) > 0 && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 text-xs text-center text-white rounded-full bg-red-700">
                {shoppingCartCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
