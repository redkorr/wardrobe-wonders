import { NavBar, OrderItemsList } from '@/components';
import useOrder from '@/hooks/useOrder';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Summary = () => {
  const { getOrderById, data } = useOrder();
  const { pathname } = useLocation();
  useEffect(() => {
    getOrderById(pathname.split('/').slice(1)[1]);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="mt-28">
        {data === undefined ? (
          <p>Loading...</p>
        ) : (
          <div className="mx-12 text-lg font-semibold flex flex-col items-center">
            {!Array.isArray(data) && (
              <div>
                <div>
                  <p>Your order is confirmed.</p>
                  <p>An email was sent to you at {data.billing_address.email}</p>
                </div>
                <OrderItemsList orderItems={data.order_items} />
                {data.order_items && (
                  <div>
                    <div className=" flex justify-between text-2xl mb-4 mt-2">
                      <p>Products:</p>
                      <p>
                        {data.items_price}
                        {data.order_items[0].currency}
                      </p>
                    </div>
                    <hr className="my-2" />
                    <div className=" flex justify-between text-2xl my-4">
                      <p>Delivery cost:</p>
                      <p>
                        {data.delivery.cost}
                        {data.order_items[0].currency}
                      </p>
                    </div>
                    <hr className="my-2" />
                    <div className=" flex justify-between text-2xl my-4">
                      <p>Payment cost:</p>
                      <p>
                        {data.payment.cost}
                        {data.order_items[0].currency}
                      </p>
                    </div>
                    <hr className="my-2" />
                    <div className=" flex justify-between text-2xl my-4">
                      <p>Final Price:</p>
                      <p>
                        {data.total}
                        {data.order_items[0].currency}
                      </p>
                    </div>
                    <hr className="my-2" />
                  </div>
                )}

                <div className="w-2/3 flex justify-center">
                  <table className="w-full mt-6 mb-10">
                    <thead className="border-b">
                      <tr>
                        <th>Date</th>
                        <th>Delivery Method</th>
                        <th>Payment Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td>{data.date.toString().split('T')[0]}</td>
                        <td>{data.delivery.type}</td>
                        <td>{data.payment.type}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
