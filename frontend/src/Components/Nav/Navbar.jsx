import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: #1b1b1b;  
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #256ce1; //linea divisora
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color:#cccccc;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Logo
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar