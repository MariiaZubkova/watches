import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import OneWatchCard from '../ui/OneWatchCard';

export default function MainPage({ watch }) {
//   const { currentPosts, submitHandler, deleteHandler } = usePosts({ watch });
  return (
    <Row>
      {watch.map((el) => <OneWatchCard key={el.id} watch={el} />)}
    </Row>

  );
}
