import { CustomSlider, IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { HackathonTitleContainer } from 'views/styled-components';

function Guests() {
  const guests = `CONOCE A NUESTROS INVITADOS`;

  return (
    <div id={Routes.GUESTS}>
      <IntersectionObserverSection hash={Routes.GUESTS}>
        <HackathonTitleContainer>{guests}</HackathonTitleContainer>
        <CustomSlider />
      </IntersectionObserverSection>
    </div>
  );
}

export default Guests;
