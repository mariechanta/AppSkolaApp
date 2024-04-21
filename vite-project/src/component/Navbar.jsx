// Navbar.jsx

// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>School Collaboration App</h1>
    </Nav>
  );
};

export default Navbar;
