import { useState } from 'react';
import { BillingAddressData } from '../../types';

const useBillingAddress = () => {
  const [data, setData] = useState<BillingAddressData>();
  const env = import.meta.env.NODE_ENV === 'production' ? `${import.meta.env.VITE_API_URL}` : 'http://localhost:5000';
  const URL = `${env}/api/billing-address`;
  async function postBillingAddress(billingAddress: BillingAddressData) {
    try {
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(billingAddress)
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getBillingAddresses(userId: string) {
    try {
      const response = await fetch(`${URL}/${userId}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  return { postBillingAddress, getBillingAddresses, data };
};
export default useBillingAddress;
