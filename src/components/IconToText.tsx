import styled from "styled-components";
import { TypeWritterTitle } from "./TypeWritterTitle";

const IconToTextButton = styled.button`
  font-size: 25px;
  background: transparent;
  border: none;
  color: #eb118a;
  cursor: pointer;
`;

const IconToTextContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  .hidden-text {
    text-shadow: -1px 0 #eb118a, 0 1px #eb118a, 1px 0 #eb118a, 0 -1px #eb118a;
  }
`;

export function IconToText(props: any) {
  return (
    <IconToTextContainer>
      <IconToTextButton>{props.icon}</IconToTextButton>
      <TypeWritterTitle className="hidden-text" fontSize="16px" characters={props.text.length} color="default">
        {props.text}
      </TypeWritterTitle>
    </IconToTextContainer>
  );
}
