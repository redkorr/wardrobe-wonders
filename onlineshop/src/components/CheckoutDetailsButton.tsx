import usePayment from '@/hooks/usePayment';

interface CheckoutDetailsButtonProps {
  buttonText: string;
  orderId: string;
}

const CheckoutDetailsButton = ({ buttonText, orderId }: CheckoutDetailsButtonProps) => {
  const { getClientSecret } = usePayment(orderId);
  return (
    <div className="w-full">
      <button
        form="checkout-form"
        type="submit"
        className="w-full py-2 px-3 text-center border border-blue-500 bg-blue-900 text-slate-100 hover:bg-blue-800 transition duration-200 ease-in-out"
        onClick={async () => {
          const response = await getClientSecret();
          window.location.href = response.session.url;
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CheckoutDetailsButton;
