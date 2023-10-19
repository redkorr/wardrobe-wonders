import { UserButton, useAuth, useSignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const { isLoaded } = useSignIn();

  return (
    <div className="">
      {!isSignedIn && isLoaded && <Link to="/checkout/login">ab</Link>}
      <UserButton
        showName
        afterSignOutUrl="/"
      />
    </div>
  );
};

export default Navbar;
