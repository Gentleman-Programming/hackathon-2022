import { MainContainer, TypeWritterTitle } from 'components';
import { device } from 'models';
import { useEffect } from 'react';
import styled from 'styled-components';

const HackathonTitleContainer = styled.div`
  margin: 4rem auto;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const HackathonParagraph = styled.div`
  background-color: #222126;
  padding: 15px;
  margin: 0;
  width: 100%;
  line-height: 22px;
  border-left: 1px solid white;
  text-align: left;
  box-sizing: border-box;
  pre {
    margin: 0;
  }
  @media only screen and ${device.sm} {
    font-size: 2vw;
  }
`;

const HackathonSubTitleContainer = styled.div`
  margin: 2rem auto;
`;

const HackathonButton = styled.a`
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  color: white;
  border: none;
  margin-top: 30px;
  font-size: 1rem;
  background-color: #eb118a;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
  :hover {
    background-color: #630238;
  }
`;

export default function Hackathon() {
  useEffect(() => {});
  const title = 'Hackathon Gentleman Programming 2021';
  const when = `¿ Cúando será ?`;
  const free = `¿ Es gratis ?`;
  const what = `¿ Qué se trata de atacar ?`;
  const how = `¿ Cómo se atacará ?`;
  const tech = `¿ Qué tecnologías ?`;
  const more = `¿ Qué extras se darán ?`;
  const where = `¿ Dónde se realizará ?`;
  return (
    <>
      <MainContainer>
        <HackathonTitleContainer>{title}</HackathonTitleContainer>
        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={free.length} color="default">
            {free}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            SI! es totalmente gratuito, no te vamos a pedir ningún tipo de dinero ni antes, ni durante, ni después. La idea es que aprendas
            y disfrutes de la experiencia sin ningún tipo de compromiso.
          </span>
        </HackathonParagraph>

        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={when.length} color="default">
            {when}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            Se realizará a finales del mes de Septiembre asi que atentos que anunciaremos luego quiénes han sido los seleccionados y también
            habrán charlas abiertas al público !!
          </span>
        </HackathonParagraph>

        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={what.length} color="default">
            {what}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            La idea del evento es la de satisfacer una problemática social, y una que nos toca bastante, que es la de acercar una grieta que
            hemos encontrado a la hora de realizar boot camps para poder comenzar la carrera profesional.
          </span>
        </HackathonParagraph>

        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={how.length} color="default">
            {how}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            Esto se realizaría mediante la creación de una app web en la cual tanto una empresa como un desarrollador pueden crear sus
            perfiles, la primera puede aportar publicaciones sobre próximos boot camps que estén ofreciendo y los segundos podrán aplicar a
            los mismos enviando información previamente cargada en su perfil (currículum, LinkedIn, etc).
          </span>
        </HackathonParagraph>
        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={tech.length} color="default">
            {tech}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            En cuanto a las tecnologías para hacerlo son React o Angular, Node Js, o en caso de no tener backend se podrá utilizar firebase.
            Se formarán equipos que tendrán un mentor reconocido del ambiente para ayudar con las dudas técnicas y tenemos premios para los
            ganadores !!
          </span>
        </HackathonParagraph>

        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={more.length} color="default">
            {more}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            Por último para retomar el concepto de las charlas, se darán diferentes webinars orientados a la programación web en las semanas
            previas al evento y estos serán totalmente gratuitos y abiertos a todo el público.
          </span>
        </HackathonParagraph>

        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={where.length} color="default">
            {where}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            Todo esto ( incluido el hackathon ) se realizará de forma remota por el servidor de discord de gentleman programming en el
            transcurso de dos días
          </span>
        </HackathonParagraph>
      </MainContainer>
    </>
  );
}
