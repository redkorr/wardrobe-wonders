import { useState } from 'react';
import { BillingAddressData } from '../../types';

const useBillingAddress = () => {
  const [data, setData] = useState<Array<BillingAddressData>>();
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
  async function putBillingAddress(billingAddress: BillingAddressData) {
    try {
      await fetch(`${URL}/${billingAddress._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(billingAddress)
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getBillingAddressList(userId: string) {
    try {
      const response = await fetch(`${URL}/${userId}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  return { postBillingAddress, getBillingAddressList, data, putBillingAddress };
};
export default useBillingAddress;
