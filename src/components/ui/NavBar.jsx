import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavbar() {
  // const { signUpHandler, logoutHandler } = useAuth();
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="border-bottom border-primary"
    >
      <Container>
        <Navbar.Brand href="#home" />
        <Nav className="me-auto flex-grow-1">
          <Nav.Link href="#home">Для доп функционала</Nav.Link>
          <Nav.Link href="#features">оставить заявку(для зарегистрированного)</Nav.Link>
          <Nav.Link href="#pricing">Заказы(видно для админа)</Nav.Link>
          <Nav.Link href="#pricing">Авторизация/Регистрация</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
