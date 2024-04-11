import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import OneWatchCard from '../ui/OneWatchCard';
import AppCorousel from '../ui/AppCorousel';

export default function MainPage({ watch, user }) {
//   const { currentPosts, submitHandler, deleteHandler } = usePosts({ watch });
  return (
    <>
      <Row>
        <AppCorousel />

      </Row>
      <Row>
        {watch.map((el) => <OneWatchCard key={el.id} watch={el} user={user} />)}
      </Row>
    </>

  );
}
