import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background: rgb(7, 27, 25);
  color: white;
`;

const StyledNavLinks = styled.ul`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;

  a {
    color: white;
    text-align: right;
  }
`;

const Nav: React.FC = () => {
  return (
    <div>
      <StyledNav>
        <Link to="/">
          <h3>Logo</h3>
        </Link>
        <StyledNavLinks>
          <li>
            <Link to="/about">About</Link>
          </li>
        </StyledNavLinks>
      </StyledNav>
    </div>
  );
};

export default Nav;
