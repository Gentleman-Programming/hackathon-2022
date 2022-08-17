import FromYouImg from 'assets/img/fromYou.png';
import { IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { HackathonParagraph, HackathonTitleContainer, SectionContainer } from 'views/styled-components';

function FromYou() {
  const fromYou = `¿QUÉ ESPERAMOS DE TI?`;
  return (
    <div id={Routes.FROMYOU}>
      <IntersectionObserverSection hash={Routes.FROMYOU}>
        <HackathonTitleContainer>{fromYou}</HackathonTitleContainer>
        <SectionContainer>
          <div>
            <HackathonParagraph>Que te diviertas, aprendas, generes vínculos y seas responsable !</HackathonParagraph>
            <HackathonParagraph>
              No sólo por ti mismo y por el evento, sino también por tus compañeros con los que harás equipo.
            </HackathonParagraph>
          </div>
          <img src={FromYouImg} alt="Hackathon Gentleman Programming 2022" />
        </SectionContainer>
      </IntersectionObserverSection>
    </div>
  );
};

export default FromYou;
