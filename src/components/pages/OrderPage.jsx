import React, { useState } from 'react';
import OrderForm from '../ui/OrderForm';
import OrderCard from '../ui/OrderCard';

export default function OrderPage({ orders }) {
  const [order, setOrder] = useState(orders);
  console.log(orders);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const response = await fetch('/api/order/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setOrder((prev) => [data, ...prev]);
    e.target.reset();
  };

  const deleteHandler = async (id) => {
    await fetch(`/api/order/${id}`, {
      method: 'DELETE',
    });
    setOrder((prev) => prev.filter((el) => el.id !== id));
  };

  return (

    <div className="row">
      <OrderForm submitHandler={submitHandler} />
      <br />
      {order?.map((ord) => (
        <div className="col-4 mb-3 mt-3">
          <OrderCard key={ord.id} ord={ord} deleteHandler={deleteHandler} />
        </div>
      ))}
    </div>
  );
}
