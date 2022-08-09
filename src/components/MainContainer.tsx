import { device } from "models";
import styled from "styled-components";

interface Props {
  direction: "column" | "row";
  alignment: "baseline" | "center" | "end" | "start";
}

const MainContainerElement = styled.div`
  max-width: 80%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: ${(props: Props) => props.direction || "column"};
  align-items: ${(props: Props) => props.alignment || "center"};
  justify-items: ${(props: Props) => props.alignment || "center"};
  box-sizing: border-box;
  @media only screen and ${device.sm} {
    flex-direction: column;
    width: 100%;
  }
`;

export function MainContainer(props: any) {
  return (
    <MainContainerElement direction={props.direction} alignment={props.alignment}>
      {props.children}
    </MainContainerElement>
  );
}
