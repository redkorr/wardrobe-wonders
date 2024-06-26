import { MyAccountComponent, MyOrders } from '@/components';
import Navbar from '@/components/NavBar';

const MyAccount = () => {
  return (
    <div>
      <Navbar />
      <MyAccountComponent />
      <MyOrders />
    </div>
  );
};

export default MyAccount;
