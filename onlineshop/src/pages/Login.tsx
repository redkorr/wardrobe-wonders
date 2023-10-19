import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div>
      <SignIn
        path="/checkout/login"
        routing="path"
        signUpUrl="/checkout/register"
      />
    </div>
  );
};

export default Login;
