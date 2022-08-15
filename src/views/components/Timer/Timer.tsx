import { CountdownTimer, IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { HackathonTimerContainer } from 'views/styled-components';

function Timer() {
  return (
    <div id={Routes.TIMER}>
      <IntersectionObserverSection hash={Routes.TIMER}>
        <HackathonTimerContainer>
          <p className="heading1">INCRÍBETE EN EL HACKATHON</p>
          <CountdownTimer countdownDate="2022/10/1" />
        </HackathonTimerContainer>
      </IntersectionObserverSection>
    </div>
  );
}

export default Timer;
