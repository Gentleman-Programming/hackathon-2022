import WhatImg from 'assets/img/what.png';
import { IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { HackathonParagraph, HackathonTitleContainer, SectionContainer } from 'views/styled-components';

function What() {
  const what = `¿ QUÉ ES ?`;
  return (
    <div id={Routes.WHAT}>
      <IntersectionObserverSection hash={Routes.WHAT}>
        <HackathonTitleContainer>{what}</HackathonTitleContainer>
        <SectionContainer>
          <img src={WhatImg} alt="Hackathon Gentleman Programming 2022" />
          <div>
            <HackathonParagraph>
              Es un evento especial para los programadores que quieren aprender más sobre el trabajo en equipo y recibir el mentoring
              directo de especialistas en el ambiente.
            </HackathonParagraph>
            <HackathonParagraph>
              La idea principal es la de desarrollar en dos días una aplicación que pueda ayudar de alguna forma a la comunidad, se formarán
              equipos de desarrollo liderados por un mentor asignado !
            </HackathonParagraph>
            <HackathonParagraph>
              Aprenderás sobre trabajo en equipo, procesos de desarrollo, metodologías ágiles, herramientas de gestión y podrás aprender aun
              más sobre las diferentes tecnologías que rigen hoy en día el desarrollo web.
            </HackathonParagraph>
          </div>
        </SectionContainer>
      </IntersectionObserverSection>
    </div>
  );
}

export default What;
