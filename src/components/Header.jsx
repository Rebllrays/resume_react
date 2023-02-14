import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
  return (
    <Navbar className='navbar my-4'>
        <Navbar.Text className='nav text-light m-3 mx-5'>AGRM</Navbar.Text>
      <Container className='mx-5'>
        <Link to='/'>
          <Navbar.Brand className={location.pathname === '/' ? 'btn': 'btn'}>Home</Navbar.Brand>
        </Link>
        <Link to='/portfolio'>
          <Navbar.Brand className={location.pathname === '/portfolio' ? 'btn': 'btn'}>Portfolio</Navbar.Brand>
        </Link>
        <Link to='/about'>
          <Navbar.Brand className={location.pathname === '/about' ? 'btn': 'btn'}>About</Navbar.Brand>
        </Link>
        <Link to='/cv'>
          <Navbar.Brand className={location.pathname === '/cv' ? 'btn': 'btn'}>Cv</Navbar.Brand>
        </Link>
        <Link to='/contact'>
          <Navbar.Brand className={location.pathname === '/contact' ? 'btn': 'btn'}>Contact</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header