import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import AdditionForm from '../ui/AdditionForm';
import OneWatchCard from '../ui/OneWatchCard';
import AppCorousel from '../ui/AppCorousel';

export default function MainPage({ watch, user, request }) {
  //   const { currentPosts, submitHandler, deleteHandler } = usePosts({ watch });
  const [rs, setRes] = useState(request);
  return (
    <>
      <Row>
        <AppCorousel />
      </Row>
      <Row>
        {watch?.map((el) => <OneWatchCard key={el.id} watch={el} user={user} />)}
      </Row>
      <AdditionForm setRes={setRes} />
    </>
  );
}
