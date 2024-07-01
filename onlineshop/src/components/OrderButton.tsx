import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Order } from 'types';
import OrderItemsList from './OrderItemsList';

interface OrderProps {
  order: Order;
}

const OrderButton = ({ order }: OrderProps) => {
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setIsOrderOpen(!isOrderOpen)}
        className="text-lg w-full border my-3 relative text-left px-4 py-8 child:mb-1"
      >
        <p>Order ID: {order.order_id}</p>
        <p>Date: {order.date.toString().slice(0, 10).replaceAll('-', '.')}</p>
        {isOrderOpen ? (
          <>
            <p>Total: {order.total}</p>
            <p>Payment method: {order.payment.type}</p>
            <p className="flex">
              Status: <p className="ml-1 p-1 text-sm border rounded-3xl bg-slate-400">{order.order_status}</p>
            </p>
            <OrderItemsList orderItems={order.order_items} />
          </>
        ) : (
          <></>
        )}
        {isOrderOpen ? (
          <ChevronUp className="absolute top-4 right-4" />
        ) : (
          <ChevronDown className="absolute top-4 right-4" />
        )}
      </button>
    </div>
  );
};

export default OrderButton;
