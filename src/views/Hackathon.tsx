import { MainContainer, TypeWritterTitle } from "components";
import { device } from "models";
import { useEffect } from "react";
import styled from "styled-components";

const HackathonTitleContainer = styled.div`
  margin: 4rem auto;
  margin-bottom: 0;
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
  const title = "Hackathon Gentleman Programming 2021";
  const when = `¿Cúando será ?`;
  const what = `¿Qué se trata de atacar ?`;
  const how = `¿Cómo se atacará ?`;
  const tech = `¿Qué tecnologías ?`;
  const more = `¿Qué extras se darán ?`;
  const where = `¿Dónde se realizará ?`;
  return (
    <>
      <MainContainer>
        <HackathonTitleContainer>{title}</HackathonTitleContainer>
        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" characters={when.length}>
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
          <TypeWritterTitle fontSize="1rem" characters={what.length}>
            {what}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            La idea del evento es la de satisfacer una problemática social, y una que nos toca bastante, que es la de satisfacer una grieta
            que hemos encontrado a la hora de encontrar boot camps para poder comenzar la carrera profesional.
          </span>
        </HackathonParagraph>

        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" characters={how.length}>
            {how}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            Esto de realizaría mediante la creación de una app web en la cual tanto y a empresa como un desarrollador pueden crear sus
            perfiles, la primera puede aportar publicaciones sobre próximos boot camps que estén ofreciendo y los segundos podrán aplicar a
            los mismos enviando información previamente cargada en su perfil (currículum, LinkedIn, etc).
          </span>
        </HackathonParagraph>
        <HackathonSubTitleContainer>
          <TypeWritterTitle fontSize="1rem" characters={tech.length}>
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
          <TypeWritterTitle fontSize="1rem" characters={more.length}>
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
          <TypeWritterTitle fontSize="1rem" characters={where.length}>
            {where}
          </TypeWritterTitle>
        </HackathonSubTitleContainer>
        <HackathonParagraph>
          <span>
            Todo esto ( incluido el hackathon ) se realizará de forma remota por el servidor de discord de gentleman programming en el
            transcurso de dos días
          </span>
        </HackathonParagraph>

        <HackathonButton href="https://forms.gle/G8iJb3ho3HhVm4rx6" target="_blank" rel="noreferrer">
          Inscribite !!
        </HackathonButton>
      </MainContainer>
    </>
  );
}
