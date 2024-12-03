import LINKS from '@/utils/linkPaths';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const param = location.pathname;

  return (
    <div className="h-full">
      {param === '/my-account/login' ? (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <SignIn
            path={LINKS.myAccountLogin}
            routing="path"
            redirectUrl={LINKS.MyAccount}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <SignIn
            path={LINKS.checkoutLogin}
            routing="path"
            redirectUrl={LINKS.checkout}
          />
          <Link
            to="/checkout"
            className="underline"
          >
            Continue without registration
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
