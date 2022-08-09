import FromYouImg from 'assets/img/fromYou.png';
import Mustache from 'assets/img/mustache-logo.svg';
import ParticipateImg from 'assets/img/participate.png';
import WhatImg from 'assets/img/what.png';
import { CountdownTimer, CustomSlider, MainContainer, Navbar, TypeWritterTitle } from 'components';
// import { Slider } from "components/Slider/Slider";
import { device } from 'models';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Circle = styled.div`
  width: 44.5rem;
  height: 44.5rem;
  border-radius: 50%;
  border: 3px solid #f3569c;
  z-index: -1;
  &.first {
    position: absolute;
    top: -3%;
    left: -6%;
  }
  &.second {
    position: absolute;
    bottom: -7%;
    right: -17%;
  }

  @media only screen and ${device.sm} {
    width: 20.5rem;
    height: 20.5rem;
    &.first {
      position: absolute;
      top: -8rem;
      left: -8.5rem;
    }

    &.second {
      position: absolute;
      top: 35rem;
      right: -7rem;
    }
  }
`;

const HackathonTitle = styled.h1`
  font-family: 'Birthstone';
  font-size: 12.5rem;
  font-weight: 400;
  margin: -2.5rem 0 0;
  color: #f5f0f2;
  letter-spacing: 0.0025rem;
  text-shadow: 0px 3.51px 3.51px #eb1889;

  @media only screen and ${device.sm} {
    margin: -0.5rem 0 0;
    font-size: 6rem;
  }
`;

const HackathonSubtitle = styled.p`
  margin-top: -2rem;
`;

const MouseAnimation = styled.div`
  width: 3rem;
  height: 5.5rem;
  border: 2px solid #eb1889;
  border-radius: 2rem;
  margin: 2rem auto;

  .dot {
    width: 1rem;
    height: 1rem;
    background-color: #eb1889;
    border-radius: 50%;
    margin: 1rem auto;
    animation: scroll 3s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(-0.5rem);
    }

    50% {
      transform: translateY(2rem);
    }

    100% {
      transform: translateY(-0.5rem);
    }
  }
`;

const HackathonTimerContainer = styled.div`
  width: 100%;
  padding: 4.5rem 0;
  border: 1px solid #e731ed80;
  background: radial-gradient(94.24% 733.91% at 2.64% 15.6%, rgba(231, 49, 237, 0.3) 0%, rgba(231, 49, 237, 0.06) 100%);
  backdrop-filter: blur(0.75rem);
`;

const PrimaryButton = styled.a`
  width: max-content;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb1889;
  box-shadow: 0px 0px 8px rgba(231, 49, 237, 0.5);
  border-radius: 0.25rem;
  color: #f5f0f2;
  box-sizing: border-box;
  margin: 2rem auto;
`;

const SecondaryButton = styled.a`
  width: max-content;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f0f2;
  box-shadow: 0px 0px 8px rgba(231, 49, 237, 0.5);
  border: 1px solid #e731ed;
  border-radius: 0.25rem;
  color: #e731ed;
  box-sizing: border-box;
  margin: 2rem auto;
`;

const HackathonTitleContainer = styled.div`
  margin: 3rem auto;
  font-family: 'Montserrat';
`;

const HackathonParagraph = styled.p`
  font-family: 'Lato';
  font-size: clamp(1rem, calc(1rem + 2vw), 30px);
  color: #f5f0f2;
  text-align: left;
  span {
    color: #eb1889;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 4rem;

  @media only screen and ${device.sm} {
    flex-direction: column;
    img {
      width: 80%;
    }
  }
`;

export default function Landing() {
  useEffect(() => {});
  const what = `¿ QUÉ ES ?`;
  const fromYou = `¿ QUÉ ESPERAMOS DE TI ?`;
  const participate = `¿ CÓMO PARTICIPAR ?`;
  const guests = `CONOCE A NUESTROS INVITADOS`;
  const [navigate, setNavigate] = useState(false);
  const history = useHistory();

  return (
    <>
      <div
        style={{ position: 'relative', display: 'flex', gap: '5rem', flexFlow: 'column wrap' }}
        className={navigate ? 'fadeOutLeft' : ''}
      >
        <Navbar />
        <Circle className="first" />
        <MainContainer>
          <img src={Mustache} alt="Hackathon Gentleman Programming 2022" />
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
        <Circle className="second" />
        <HackathonTimerContainer>
          <p className="heading1">INCRÍBETE EN EL HACKATHON</p>
          <CountdownTimer countdownDate="2022/09/02" />
          <PrimaryButton href="/">Quiero formar parte del hackathon 2022</PrimaryButton>
        </HackathonTimerContainer>
        <MainContainer>
          <HackathonTitleContainer>
            <TypeWritterTitle fontSize="2.25rem" lineHeight="2.6rem" characters={what.length} color="default">
              {what}
            </TypeWritterTitle>
          </HackathonTitleContainer>
          <SectionContainer>
            <img src={WhatImg} alt="Hackathon Gentleman Programming 2022" />
            <div>
              <HackathonParagraph>
                Es un evento especial para los programadores que quieren aprender más sobre el trabajo en equipo y recibir el mentoring
                directo de especialistas en el ambiente.{' '}
              </HackathonParagraph>
              <HackathonParagraph>
                La idea principal es la de desarrollar en dos días una aplicación que pueda ayudar de alguna forma a la comunidad, se
                formarán equipos de desarrollo liderados por un mentor asignado !
              </HackathonParagraph>
              <HackathonParagraph>
                Aprenderás sobre trabajo en equipo, procesos de desarrollo, metodologías ágiles, herramientas de gestión y podrás aprender
                aun más sobre las diferentes tecnologías que rigen hoy en día el desarrollo web.
              </HackathonParagraph>
            </div>
          </SectionContainer>

          <HackathonTitleContainer>
            <TypeWritterTitle fontSize="2.25rem" lineHeight="2.6rem" characters={fromYou.length} color="default">
              {fromYou}
            </TypeWritterTitle>
          </HackathonTitleContainer>
          <SectionContainer>
            <div>
              <HackathonParagraph>Que te diviertas, aprendas, generes vínculos y seas responsable !</HackathonParagraph>
              <HackathonParagraph>
                No sólo por ti mismo y por el evento, sino también por tus compañeros con los que harás equipo.
              </HackathonParagraph>
            </div>
            <img src={FromYouImg} alt="Hackathon Gentleman Programming 2022" />
          </SectionContainer>

          <HackathonTitleContainer>
            <TypeWritterTitle fontSize="2.25rem" lineHeight="2.6rem" characters={participate.length} color="default">
              {participate}
            </TypeWritterTitle>
          </HackathonTitleContainer>
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
              <SecondaryButton
                onClick={() => {
                  setNavigate(true);
                  setTimeout(() => {
                    history.push(`/ricknmorty-challenge`);
                  }, 1000);
                }}
              >
                ¿Cómo participar?
              </SecondaryButton>
            </HackathonParagraph>
          </SectionContainer>

          <HackathonTitleContainer>
            <TypeWritterTitle fontSize="2.25rem" lineHeight="2.6rem" characters={guests.length} color="default">
              {guests}
            </TypeWritterTitle>
          </HackathonTitleContainer>
          <CustomSlider />
        </MainContainer>
      </div>
    </>
  );
}
