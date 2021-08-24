import GentlemanProgrammingLogo from "assets/img/GentlemanProgrammingLogo.png";
import { TypeWritterTitle } from "components";
import { device } from "models";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const WelcomeLogoContainer = styled.div`
  position: relative;
`;

const WelcomeLogo = styled.img`
  width: 50%;
  margin-bottom: 0;
  @media only screen and ${device.sm} {
    width: 75%;
  }
`;

const WelcomeLogoName = styled.p`
  position: absolute;
  top: 22vw;
  left: 30vw;
  span {
    font-size: 3vw !important;
  }
  @media only screen and ${device.sm} {
    top: 32vw;
    left: 12vw;
    span {
      font-size: 6vw !important;
    }
  }
`;

const WelcomeLogoPinkName = styled.span`
  color: #eb118a;
`;

const HackathonText = styled.p`
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-top: 0;
  font-size: 3vw;

  @media only screen and ${device.sm} {
    margin-top: 30px;
    font-size: 10vw;
  }
`;

const WelcomeButton = styled.button`
  color: white;
  border: none;
  font-size: 3vw;
  background-color: #eb118a;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and ${device.sm} {
    font-size: 6vw;
  }
`;

export default function Welcome() {
  const titlePink = "Gentleman";
  const title = " Programming";
  const [navigate, setNavigate] = useState(false);
  const history = useHistory();

  return (
    <WelcomeContainer className={navigate ? "fadeOutLeft" : ""}>
      <WelcomeLogoContainer>
        <WelcomeLogo className="heartBeat" src={GentlemanProgrammingLogo} alt="GentlemanProgrammingLogo" />
        <WelcomeLogoName>
          <TypeWritterTitle fontSize="1rem" characters={titlePink.length + title.length}>
            <WelcomeLogoPinkName>{titlePink}</WelcomeLogoPinkName>
            {title}
          </TypeWritterTitle>
        </WelcomeLogoName>
        <HackathonText>Hackathon</HackathonText>
      </WelcomeLogoContainer>
      <WelcomeButton
        onClick={() => {
          setNavigate(true);
          setTimeout(() => {
            history.push(`/hackathon`);
          }, 1000);
        }}
      >
        Enter
      </WelcomeButton>
    </WelcomeContainer>
  );
}
