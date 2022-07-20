import RnMTitleImage from "assets/img/rick-and-morty.png"
import RnMFloatingHead from "assets/img/floating-head.png";
import RnMPlanet from "assets/img/planet.png";
import RnMCharacters from "assets/img/rick-and-morty-characters.png";
import RnMPortal from "assets/img/portal.png";
import { MainContainer, TypeWritterTitle } from "components";
import { device } from "models";
import { useEffect } from "react";
import styled from "styled-components";

const RnMTitleContainer = styled.div`
    margin: 4rem auto 2rem auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;

    img {
        width: 100%;
    }
`;

const RnMSubTitleContainer = styled.div`
  margin: 2rem auto;
`;

const RnMLink = styled.a`
    color: #00c853;
    cursor: pointer;
`;

const RnMParagraphSection = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    border: solid 1px #4caf50;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    text-align: justify;
    line-height: 22px;
    box-shadow: 0.25rem 0.25rem 2rem #00c853;
    background: radial-gradient(ellipse at center, rgba(0,200,83,0.25) 0%, rgba(0,0,0,1) 50%);
    ul, ol {
        margin: 0;
    }

    &::before {
        border-radius: 0.5rem;
        content: " ";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(#000000BF 0px, #64dd17BF 4px, #000000BF 4px, #64dd17BF 4px, #000000bF 8px);
        opacity: 0.3;
        z-index: 0;
    }

    @media only screen and ${device.sm} {
        text-align: left;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        box-shadow: 0 0 1rem #00c853;
        overflow: hidden;

        ul, ol {
            padding-inline-start: 1.9rem
        }
    }
`;

const RnMParagraphImgContainer = styled.div`
    width: 100%;
    position: relative;
    .floatin-head-img {
        width: 15rem;
        position: absolute;
        left: -12rem;
        top: -10rem;
        filter: drop-shadow(0 0 1.5rem #fbc02d)
    }
    .planet-img {
        width: 12rem;
        position: absolute;
        right: -8rem;
        top: -5rem;
        filter: drop-shadow(0 0 1.5rem #00c853);
    }
    .ricknmorty-img {
        width: 18rem;
        position: absolute;
        left: -15rem;
        top: -4.5rem;
    }

    @media only screen and ${device.sm} {
        visibility: hidden
    }
`;

const HackathonText = styled.p`
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-top: 0;
  font-size: 3vw;
  margin-top: 2.5rem;

  @media only screen and ${device.sm} {
    margin-top: 30px;
    font-size: 10vw;
  }
`;

const RnMFooterContainer = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 10rem;
        filter: drop-shadow(0 -0.5rem 1.5rem #b2ff59);
    }
`;

export default function RickNMorty() {
    useEffect(() => {});
    const title = ' Challenge';
    const toDo =  `¿Qué tendrás que hacer?`;
    const valorate = `¿Qué se valorará?`;
    const want = `¿Qué necesitamos de ti?`;
    const start = `¡Que comience la aventura!`;

    return (
        <>
            <MainContainer>
                <RnMTitleContainer>
                   <img src={RnMTitleImage} alt="Rick and Morty Challenge" />{title}
                </RnMTitleContainer>

                <RnMSubTitleContainer>
                    <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={toDo.length} color="green">
                        {toDo}
                    </TypeWritterTitle>
                </RnMSubTitleContainer>
                <RnMParagraphSection>
                    <RnMParagraphImgContainer>
                        <img className="floatin-head-img" src={RnMFloatingHead} alt="Rick and Morty Challenge" />
                    </RnMParagraphImgContainer>
                    Crear una aplicación con la API de <RnMLink href=" https://rickandmortyapi.com/" target="_blank" rel="noreferrer">Rick and Morty</RnMLink> (no te preocupes es totalmente gratuita), esta aplicación será sin nungún tipo de reglas. <br />
                    ¿Sin ningun tipo de reglas? ¡Así es!, pues tú serás el amo y señor en esta aplicación, y como tal, tú decidirás, la lógica de negocio, el objetivo y demás.
                </RnMParagraphSection>

                <RnMSubTitleContainer>
                    <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={valorate.length} color="green">
                        {valorate}
                    </TypeWritterTitle>
                </RnMSubTitleContainer>
                <RnMParagraphSection>
                    <RnMParagraphImgContainer>
                        <img className="planet-img" src={RnMPlanet} alt="Rick and Morty Challenge" />
                    </RnMParagraphImgContainer>
                    <ul>
                        <li>Idea.</li>
                        <li>Calidad de código.</li>
                        <li>Presentación.</li>
                    </ul>
                </RnMParagraphSection>

                <RnMSubTitleContainer>
                    <TypeWritterTitle fontSize="1rem" lineHeight="2rem" characters={want.length} color="green">
                        {want}
                    </TypeWritterTitle>
                </RnMSubTitleContainer>
                <RnMParagraphSection>
                    <RnMParagraphImgContainer>
                        <img className="ricknmorty-img" src={RnMCharacters} alt="Rick and Morty Challenge" />
                    </RnMParagraphImgContainer>
                    <ol>
                        <li>Nombre completo.</li>
                        <li>Un repositorio público en <RnMLink href="https://github.com/" target="_blank" rel="noreferrer">GitHub</RnMLink> con el código.</li>
                        <li>Que lo hostees en algún lugar, nosotros recomendamos <RnMLink href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</RnMLink> o <RnMLink href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</RnMLink> (ambas gratuitas).</li>
                        <li>Se entregará de forma privada por email a <RnMLink href="mailto:gentlemanprogramming@gmail.com" target="_blank" rel="noreferrer">gentlemanprogramming@gmail.com</RnMLink></li>
                        <li>Puedes utilizar la comunidad de <RnMLink href="https://discord.gg/SCrKTXGt" target="_blank" rel="noreferrer">Discord</RnMLink> para hacer preguntas y/o ayudar a los demás sin nungún problema.</li>
                    </ol>
                </RnMParagraphSection>

                <RnMSubTitleContainer>
                    <HackathonText>Límite de entrega 2 de Septiembre</HackathonText>
                </RnMSubTitleContainer>

                <RnMSubTitleContainer>
                    {start}
                </RnMSubTitleContainer>

                <RnMFooterContainer>
                    <img src={RnMPortal} alt="Rick and Morty Challenge" />
                </RnMFooterContainer>

            </MainContainer>
        </>
    );
}