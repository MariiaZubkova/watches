import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await axios.post('/user/login', formData);
    if (res.status === 200) {
      e.target.reset();
      window.location = '/';
    }
  };
  return (
    <Form
      style={{ maxWidth: '600px', margin: 'auto' }}
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" required />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
