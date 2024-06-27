import { ChevronLeft } from 'lucide-react';
import { Dispatch } from 'react';

interface BillingAddressesProps {
  setIndex: Dispatch<React.SetStateAction<number>>;
}

const BillingAddresses = ({ setIndex }: BillingAddressesProps) => {
  return (
    <div>
      <button onClick={() => setIndex(0)}>
        <ChevronLeft />
      </button>
    </div>
  );
};

export default BillingAddresses;
