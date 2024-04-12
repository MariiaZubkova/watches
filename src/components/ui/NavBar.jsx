import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'antd';
import axios from 'axios';

export default function AppNavbar({ user }) {
  // const { signUpHandler, logoutHandler } = useAuth();

  const handleLogout = async () => {
    const response = await axios.get('/user/logout');
    if (response.status === 200) {
      window.location = '/';
    }
  };
  console.log(user);
  return (

    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="border-bottom border-primary"
    >

      <Container>

        <Navbar.Brand href="/" />
        <Nav className="me-auto flex-grow-1">
          <Nav.Link href="/">Главная</Nav.Link>
          {user && !user?.isAdmin && <Nav.Link href="/orders">оставить заявку</Nav.Link>}
          {user?.isAdmin && <Nav.Link href="/pricing">Заказы</Nav.Link>}
          {!user && (
            <>
              <Nav.Link href="/user/signup">Регистрация</Nav.Link>
              <Nav.Link href="/user/login">Авторизация</Nav.Link>
            </>
          )}
          {user && (
            <>
              <Nav.Link>{user?.name}</Nav.Link>
              <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
            </>
          )}
        </Nav>

      </Container>

    </Navbar>

  );
}
