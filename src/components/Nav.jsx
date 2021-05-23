import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <NavMain>
      <StyledNav>
        <h2>
          <Link id="logo" to="/">
            Capture
          </Link>
        </h2>
        <ul>
          <li>
            <Link to="/about">1. About Us</Link>
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
          </li>
        </ul>
      </StyledNav>
    </NavMain>
  );
};

const StyledNav = styled.nav`
  width: 80%;
  min-height: 10vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li {
    padding: 1rem 2rem;
  }
  #logo {
    font-family: "lobster", cursive;
    text-transform: capitalize;
  }
`;

const NavMain = styled.div`
  background: #282828;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
`;
