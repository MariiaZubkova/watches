import React, { useState } from 'react';
import AdditionForm from '../ui/AdditionForm';

export default function MainPage({ ress }) {
  const [rs, setRes] = useState(ress);

  return (
    <AdditionForm setRes={setRes} />
  );
}
