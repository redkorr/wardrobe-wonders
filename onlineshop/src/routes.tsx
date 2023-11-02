import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Login, HomePage, Register, Products, MyAccount } from './pages';

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
  }
  // {
  //   path: '*',
  //   element: <div>404</div>
  // }
];
