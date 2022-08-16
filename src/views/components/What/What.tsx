import Discord from 'assets/img/discord.svg';
import Es6 from 'assets/img/es6.png';
import Mustachy from 'assets/img/Mustachy.png';
import WhatImg from 'assets/img/what.png';
import { IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { HackathonParagraph, HackathonTitleContainer, Img, SectionContainer } from 'views/styled-components';

function What() {
  const what = `¿ QUÉ ES ?`;
  const live = `¿Cómo se hará?`;
  const hours = `¿Cúando se hará?`;
  const technologies = `¿Qué tecnologías?`;
  return (
    <div id={Routes.WHAT}>
      <IntersectionObserverSection hash={Routes.WHAT}>
        <HackathonTitleContainer>{what}</HackathonTitleContainer>
        <SectionContainer>
          <Img src={WhatImg} alt="Hackathon Gentleman Programming 2022" />
          <div>
            <HackathonParagraph>
              Es un evento especial para los programadores que quieren aprender más sobre el trabajo en equipo y recibir el mentoring
              directo de especialistas en el ambiente.
            </HackathonParagraph>
            <HackathonParagraph>
              El foco principal es desarrollar una aplicación que ayude y aporte a la comunidad. Se formarán equipos liderados por un mentor
              asignado y tendrán 2 días para tener una solución.
            </HackathonParagraph>
            <HackathonParagraph>
              Aprenderás sobre trabajo en equipo, procesos de desarrollo, metodologías ágiles, herramientas de gestión y podrás aprender aun
              más sobre las diferentes tecnologías que rigen hoy en día el desarrollo web.
            </HackathonParagraph>
          </div>
        </SectionContainer>
        <HackathonTitleContainer>{live}</HackathonTitleContainer>
        <SectionContainer>
          <HackathonParagraph>
            Se realizará en vivo en el canal de {''}
            <a href="https://discord.gg/KEavKkDc5Y" target="_blank" rel="noreferrer">
              Discord
            </a>{' '}
            de una manera que no creerás, la pasarás increible !
            <p>
              Siéntete un profesional haciendo las mejores prácticas de trabajo remoto para poder aprender de los mejores. De esta manera
              podrás trabajar con personas de muchos sitios diferentes pero el projecto avanzará.
            </p>
            <p>
              El mentor a cargo dispondrá de tareas y de apoyo en la coordinación del trabajo y los horarios, de manera que puedas estar con
              tu equipo la mayor parte del tiempo.
            </p>
          </HackathonParagraph>
          <Img src={Discord} alt="Hackathon Gentleman Programming 2022" />
        </SectionContainer>
        <HackathonTitleContainer>{hours}</HackathonTitleContainer>
        <SectionContainer>
          <img style={{ maxWidth: '450px' }} src={Mustachy} alt="Hackathon Gentleman Programming 2022" />
          <HackathonParagraph>
            <p>Durante los días sabado y domingo 29 - 30 Oct.</p>
            <p>
              Y como mucha gente tendrá horarios totalmente diferentes, vamos a hacerlo de la manera más facil... con metodologías ágiles !
            </p>
          </HackathonParagraph>
        </SectionContainer>
        <HackathonTitleContainer>{technologies}</HackathonTitleContainer>
        <SectionContainer>
          <HackathonParagraph>
            <p>Se podrá utilizar cualquier tipo de tecnología siempre y cuando sea Web y en Javascript !</p>
            <p>Si tienes alguna duda, el mentor dará una mano para elegir cuál iría mejor según la composición del equipo.</p>
          </HackathonParagraph>
          <Img src={Es6} alt="Hackathon Gentleman Programming 2022" />
        </SectionContainer>
      </IntersectionObserverSection>
    </div>
  );
}

export default What;
