import styled from "styled-components";

interface Props {
  characters: number;
  fontSize: string;
  lineHeight?: string;
  color: "default" | "green";
}

export const TypeWritterTitle = styled.span`
  display: inline-block;
  animation: typing 1s steps(20), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid ${(prop: Props) => prop.color === 'default' ? '#EB118A' : '#4caf50'};
  width: ${(props: Props) => props.characters}ch;
  font-size: ${(props: Props) => props.fontSize};
  line-height: ${(props: Props) => props.lineHeight || ''};
`;
