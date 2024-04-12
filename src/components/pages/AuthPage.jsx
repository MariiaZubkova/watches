import React from 'react';

import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function AuthPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    const res = await axios.post('/user/signup', formData);
    if (res.status === 200) {
      window.location = '/';
    }
  };
  return (
    <Form
      style={{ maxWidth: '400px', margin: 'auto' }}
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="name" required />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" required />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </Form>
  );
}
