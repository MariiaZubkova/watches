import React from 'react';
import OrderForm from '../ui/OrderForm';
import OrderCard from '../ui/OrderCard';

export default function OrdersPage({ orders }) {
  return (
    <div className="row">
      <OrderForm />
      <br />
      {orders?.map((order) => (
        <div className="col-4 mb-3 mt-3">
          <OrderCard key={order.id} order={order} />
        </div>
      ))}
    </div>
  );
}
