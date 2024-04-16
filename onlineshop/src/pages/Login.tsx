import { NavBar } from '@/components';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <SignIn
          path="/checkout/login"
          routing="path"
          signUpUrl="/checkout/register"
          redirectUrl="/checkout-r"
        />
        <Link
          to="/checkout"
          className="underline"
        >
          Continue without registration
        </Link>
      </div>
    </div>
  );
};

export default Login;
