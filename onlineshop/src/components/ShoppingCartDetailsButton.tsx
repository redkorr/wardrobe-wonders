import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

interface ShoppingCartDetailsButtonProps {
  buttonText: string;
}
const ShoppingCartDetailsButton = ({ buttonText }: ShoppingCartDetailsButtonProps) => {
  const navigate = useNavigate();

  const shoppingCartDetailsButton = (navLink: string) => (
    <button
      form="checkout-form"
      type="submit"
      className="w-full py-2 px-3 text-center border border-blue-500 bg-blue-900 text-slate-100"
      onClick={() => {
        navigate(navLink);
      }}
    >
      {buttonText}
    </button>
  );

  return (
    <div>
      <div className="w-full">
        <SignedIn>{shoppingCartDetailsButton('/checkout')}</SignedIn>
        <SignedOut>{shoppingCartDetailsButton('/checkout/login')}</SignedOut>
      </div>
    </div>
  );
};

export default ShoppingCartDetailsButton;
