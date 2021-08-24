import styled from "styled-components";

interface Props {
  characters: number;
  fontSize: string;
}

export const TypeWritterTitle = styled.span`
  display: inline-block;
  animation: typing 1s steps(20), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #EB118A;
  width: ${(props: Props) => props.characters}ch;
  font-size: ${(props: Props) => props.fontSize};
`;
