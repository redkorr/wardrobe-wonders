import { Login, HomePage, Register, Products } from './pages';

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
    path: 'my-accout/login',
    element: <Login />
  },
  {
    path: 'checkout/register',
    element: <Register />
  },
  {
    path: 'products/:sex/:category?',
    element: <Products />
  }
  // {
  //   path: '*',
  //   element: <div>404</div>
  // }
];
