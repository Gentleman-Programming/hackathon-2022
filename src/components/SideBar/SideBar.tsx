import { device, size } from "models";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBarItems from "./SideBarItems";

const Container = styled.div`
  position: fixed;
  padding: 0 15px;
  z-index: 999;
  flex-shrink: 0;
  box-sizing: border-box;
  font-size: 1rem;
  .active {
    color: white !important;
    button {
      color: white !important;
      text-shadow: -1px 0 #eb118a, 0 1px #eb118a, 1px 0 #eb118a, 0 -1px #eb118a;
    }
    .hidden-text {
      display: inline-block !important;
    }
  }
  @media only screen and ${device.sm} {
    background-color: rgb(0, 0, 0, 0.9);
    border-radius: 0 0 15px;
    width: 100%;
  }
`;

const SidebarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SideBarHamburguerButton = styled.button<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  font-size: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  transform: translateX(${({ open }) => (!open ? "0" : "-500px")});
  transition: transform 0.3s ease-in-out 0s;
  div {
    width: 2rem;
    height: 0.25rem;
    background: #eb118a;
    border-radius: 10px;
    transition: all 0.3s linear 0s;
    position: relative;
    transform-origin: 1px center;
    margin: 5px;
  }
`;

const SideBarCloseButton = styled.button`
  cursor: pointer;
  padding: 0;
  background: transparent;
  border: none;
  color: #eb118a;
  font-size: 2rem;
`;

export default function SideBar(props: any) {
  const checkIfMobile = () => {
    return window.innerWidth <= size.sm;
  };
  const [open, setOpen] = useState(!checkIfMobile());
  const [isMobile, setisMobile] = useState<boolean>(checkIfMobile());
  const handleWindowSizeChange = () => {
    setisMobile(checkIfMobile());
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return (
    <Container>
      {!isMobile ? (
        <SideBarItems />
      ) : (
        <>
          <SideBarHamburguerButton aria-label="hamburguer button" open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
          </SideBarHamburguerButton>
          {open ? (
            <SidebarItemsContainer>
              <SideBarCloseButton className="fadeInRight" onClick={() => setOpen(!open)}>
                x
              </SideBarCloseButton>
              <SideBarItems clicked={setOpen} />
            </SidebarItemsContainer>
          ) : (
            <></>
          )}
        </>
      )}
    </Container>
  );
}
