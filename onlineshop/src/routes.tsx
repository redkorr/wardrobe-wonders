import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import {
  Login,
  HomePage,
  Register,
  Products,
  MyAccount,
  Product,
  ShoppingCart,
  Checkout,
  Summary,
  NotFound
} from './pages';

interface Route {
  path: string;
  element: JSX.Element;
}

export const ROUTES: Array<Route> = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'checkout/login',
    element: <Login />
  },
  {
    path: 'my-account/login',
    element: <Login />
  },
  {
    path: 'checkout/register',
    element: <Register />
  },
  {
    path: 'products/:sex/:category?/:type?',
    element: <Products />
  },
  {
    path: 'product/:id/:color',
    element: <Product />
  },
  {
    path: '/my-account',
    element: (
      <>
        <SignedIn>
          <MyAccount />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    )
  },
  {
    path: '/shopping-cart',
    element: <ShoppingCart />
  },
  {
    path: 'checkout',
    element: <Checkout />
  },
  {
    path: 'summary/:id',
    element: <Summary />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
