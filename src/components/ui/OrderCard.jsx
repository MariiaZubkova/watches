import React from 'react';

export default function OrderCard({ order, deleteHandler }) {
  return (
    <div className="ord" style={{ width: '18rem' }}>
      <img src={order.img} className="ord-img-top" alt="..." />
      <div className="ord-body">
        <h5 className="ord-title">{order.title}</h5>
        <p className="ord-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href={`/order/${order.id}`} className="btn btn-primary">See the leopard</a>
        <button className="btn btn-danger" type="button" onClick={() => deleteHandler(order.id)}>Delete</button>
      </div>
    </div>
  );
}
