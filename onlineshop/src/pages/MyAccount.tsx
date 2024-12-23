import { MyAccountComponent, MyOrders } from '@/components';
import UserPageNavbar from '@/components/UserPageNavbar';
import { useState } from 'react';

const MyAccount = () => {
  const [index, setIndex] = useState<number>(0);
  const displayComponent = () => {
    const components = [<MyAccountComponent />, <MyOrders />];
    return components[index];
  };
  return (
    <div className="flex justify-center h-full">
      <div className="mt-24 w-3/5">
        <p className="text-3xl">Hello!</p>
        <hr className="mt-3" />
        <UserPageNavbar
          setIndex={setIndex}
          index={index}
        />
        <hr className="mb-3" />
        {displayComponent()}
      </div>
    </div>
  );
};

export default MyAccount;
