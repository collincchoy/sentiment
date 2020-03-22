import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background: rgb(17, 84, 76);
  color: white;

  a {
    color: inherit;
    text-align: right;
    text-decoration: none;
  }
`;

const StyledNavLinks = styled.ul`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;

  a:hover {
    color: hsl(0, 0%, 75%);
  }
`;

const Nav: React.FC = () => {
  return (
    <div>
      <StyledNav>
        <Link to="/">
          <h3>Sensitive Tim</h3>
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
