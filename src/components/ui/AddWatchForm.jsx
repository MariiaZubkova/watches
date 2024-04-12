import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddWatchForm() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    await axios.post('/api/watch', formData);
    window.location.href = '/';
  };

  return (
    <Form
      style={{ maxWidth: '600px', margin: 'auto' }}
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Form.Group>
        <Form.Label>Название часов</Form.Label>
        <Form.Control type="text" placeholder="Название" name="title" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Описание часов</Form.Label>
        <Form.Control type="text" placeholder="Описание" name="description" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Ссылка на картинку на часы</Form.Label>
        <Form.Control type="text" placeholder="Фото" name="img" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
