import React from 'react';
import Row from 'react-bootstrap/Row';
import OneWatchCard from '../ui/OneWatchCard';

export default function OrdersPage({ request }) {
  return (
    <Row>
      {request?.map((el) => <OneWatchCard key={el.id} watch={el} />)}
    </Row>
  );
}
