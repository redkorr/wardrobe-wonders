import useOrder from '@/hooks/useOrder';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { OrderButton } from '.';

const MyOrders = () => {
  const { getOrderById, data: orders } = useOrder();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getOrderById(user.id);
    }
  }, [user]);

  return (
    <div>
      {Array.isArray(orders) && (
        <>
          {orders?.map((order) => (
            <OrderButton
              key={order.order_id}
              order={order}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MyOrders;
