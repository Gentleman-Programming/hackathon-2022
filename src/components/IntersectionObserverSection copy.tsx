import { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const IntersectionObserverSectionContainer = styled.div``;

export default function IntersectionObserverSection(props: any) {
  const thisRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const changeHash = () => {
    history.push(`#${props.hash}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        !history.location.hash.includes(props.hash) &&
        thisRef.current &&
        ((thisRef.current.offsetTop - window.scrollY > 0 && thisRef.current.offsetTop - window.scrollY < window.innerHeight / 2) ||
          (thisRef.current.offsetTop === 0 && window.scrollY === 0))
      ) {
        changeHash();
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={thisRef}>
      <IntersectionObserverSectionContainer>{props.children}</IntersectionObserverSectionContainer>
    </div>
  );
}
