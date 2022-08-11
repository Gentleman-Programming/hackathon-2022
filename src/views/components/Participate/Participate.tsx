import ParticipateImg from 'assets/img/participate.png';
import { IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { Link } from 'react-router-dom';
import { HackathonParagraph, HackathonTitleContainer, SecondaryButton, SectionContainer } from 'views/styled-components';

interface Props {
  setTheNavigation: (navigation: boolean) => void;
}

function Participate({ setTheNavigation }: Props) {
  const participate = `¿ CÓMO PARTICIPAR ?`;

  return (
    <div id={Routes.PARTICIPATE}>
      <IntersectionObserverSection hash={Routes.PARTICIPATE}>
        <HackathonTitleContainer>{participate}</HackathonTitleContainer>
        <SectionContainer>
          <img src={ParticipateImg} alt="Hackathon Gentleman Programming 2022" />
          <HackathonParagraph>
            El evento tendrá dos partes, una pública y una privada: <br /> <br />
            <span>PÚBLICA:</span> Durante las semanas previas tendremos charlas de las figuras más importantes y sobre los temas más
            interesantes, de forma GRATUITA !! serán realizadas durante streams en{' '}
            <a href="https://www.twitch.tv/gentleman_programming" target="_blank" rel="noopener noreferrer">
              Twitch
            </a>{' '}
            y luego subidos a{' '}
            <a href="https://www.youtube.com/c/GentlemanProgramming" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>{' '}
            <br />
            <br />
            <span>PRIVADA:</span> El Hackathon de Gentleman Programming año 2022 descripto anteriormente !
          </HackathonParagraph>
        </SectionContainer>
        <Link to="/ricknmorty-challenge">
          <SecondaryButton onClick={() => setTheNavigation(true)}>¿Cómo participar?</SecondaryButton>
        </Link>
      </IntersectionObserverSection>
    </div>
  );
}

export default Participate;
