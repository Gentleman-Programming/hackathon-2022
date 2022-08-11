import Mustache from 'assets/img/mustache-logo.svg';
import { IntersectionObserverSection, MainContainer } from 'components';
import { Routes } from 'models/route';
import styled from 'styled-components';
import { HackathonSubtitle, HackathonTitle, MouseAnimation } from 'views/styled-components';

const GentlemanMustacheImage = styled.img`
  width: 100%;
  max-width: 250px;
`;

function Introduction() {
  return (
    <div id={Routes.INTRODUCTION}>
      <IntersectionObserverSection hash={Routes.INTRODUCTION}>
        <MainContainer>
          <GentlemanMustacheImage src={Mustache} alt="Hackathon Gentleman Programming 2022" />
          <HackathonTitle>Hackathon</HackathonTitle>
          <HackathonSubtitle className="heading3">
            <span className="heading5">by</span>
            <br />
            <span className="primary">GENTLEMAN</span>
            <br />
            PROGRAMMING
          </HackathonSubtitle>
          <MouseAnimation>
            <div className="dot"></div>
          </MouseAnimation>
        </MainContainer>
      </IntersectionObserverSection>
    </div>
  );
}

export default Introduction;
