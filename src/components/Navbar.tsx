import Logo from 'assets/img/mustache-icon.svg';

import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';

const NavbarContainer = styled.div`
  padding: 0.5rem 1rem;
  box-shadow: 0 0.25rem 0.25rem #4b192e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212121;
  width: 100%;
  box-sizing: border-box;
  h2 {
    font-weight: 700;
  }
  .links {
    position: absolute;
    top: -8rem;
    left: -70rem;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: all 0.5s ease;
    &.active {
      width: 100%;
      display: block;
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
    }
    a {
      font-size: 2rem;
      display: block;
      text-decoration: none;
      color: #f5f0f2;
      position: relative;
      &:nth-child(4n) {
        display: flex;
        margin: 1rem 1rem;
        align-items: center;
      }
      .oval {
        width: 7.5rem;
        height: 3rem;
        border: 1px solid #eb1889;
        border-radius: 50%;
        padding: 0.5rem;
        transform: rotate(-10deg);
        margin-top: -2.85rem;
        margin-left: -0.4rem;
        z-index: 0;
      }
    }
    @media screen and (min-width: 768px) {
      position: initial;
      margin: 0;
      display: flex;
      align-items: baseline;
      a {
        font-size: 1rem;
        display: inline;
        margin: 1rem 0.5rem;
        &:nth-child(4n) {
          margin: 0 auto;
        }
        .oval {
          width: 6rem;
          height: 2.75rem;
          margin-top: -2.5rem;
          margin-left: 0;
        }
      }
    }
  }

  .burgerButton {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const BackgroundDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -70rem;
  left: -20rem;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavbarContainer>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Hackathon Gentleman Programming 2022" />
          </a>
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Inicio
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Qué es
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Invitados
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Fechas importantes
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Inscribete
            <div className="oval"></div>
          </a>
        </div>
        <div className="burgerButton">
          <BurgerButton clicked={clicked} handleClick={handleClick}></BurgerButton>
        </div>
        <BackgroundDiv className={`initial ${clicked ? 'active' : ''}`}></BackgroundDiv>
      </NavbarContainer>
    </>
  );
}
