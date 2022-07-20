import styled from "styled-components";
import { TruncateText } from "./TruncateText";

const UrlContainer = styled.div`
  background-color: #393939;
  padding: 15px;
`;

const UrlNavigation = styled.div`
  background-color: #212121;
  border-radius: 5px;
  padding: 8px;
  width: 80%;
  display: inline-block;
`;

export function Url(props: any) {
  return (
    <UrlContainer>
      <UrlNavigation>
        <TruncateText>{props.children}</TruncateText>
      </UrlNavigation>
    </UrlContainer>
  );
}
