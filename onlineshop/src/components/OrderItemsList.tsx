import { OrderItem } from 'types';

interface OrderItemsListProps {
  orderItems: Array<OrderItem> | null;
}

const OrderItemsList = ({ orderItems }: OrderItemsListProps) => {
  return (
    <div className="w-2/3">
      <hr className="my-2" />
      {orderItems &&
        orderItems.length > 0 &&
        orderItems.map((orderItem, index) => (
          <div key={index}>
            <div className="relative flex">
              <img
                className="mr-10"
                width={100}
                src={
                  orderItem.image_path
                    ? `/${orderItem.category}/${orderItem.type}${orderItem.image_path}`
                    : '/onlineshop/public/placeholder-image.png'
                }
                alt={orderItem.name}
              />
              <div>
                <p className="text-lg font-semibold mb-4">{orderItem.name}</p>
                <div className="flex gap-40">
                  <div>
                    <p className="mb-2">Size</p>
                    <p>{orderItem.size}</p>
                  </div>
                  <div>
                    <p className="mb-2">Color</p>
                    <p>{orderItem.color_name}</p>
                  </div>
                  <div>
                    <p className="mb-2">Quantity</p>
                    <div className="flex gap-2">
                      <p>{orderItem.quantity}</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">Price</p>
                    <div className="flex gap-1">
                      <p>{orderItem.price}</p>
                      <p>{orderItem.currency}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-10 items-center right-0 text-2xl">
                <p className="mr-1">{orderItem.price * orderItem.quantity}</p>
                <p>{orderItem.currency}</p>
              </div>
            </div>
            <hr className="my-2" />
          </div>
        ))}
    </div>
  );
};

export default OrderItemsList;
