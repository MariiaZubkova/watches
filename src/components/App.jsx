import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';

export default function App({ children }) {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>

  );
}
