import { IntersectionObserverSection } from 'components';
import { Routes } from 'models/route';
import { HackathonCalendarContainer, HackathonCalendarIframe } from 'views/styled-components';

export default function Calendar() {
  return (
    <div id={Routes.CALENDAR}>
      <IntersectionObserverSection hash={Routes.CALENDAR}>
        <HackathonCalendarContainer>
          <p className="heading1">FECHAS IMPORTANTES</p>

          <HackathonCalendarIframe
            src="https://calendar.google.com/calendar/embed?src=gs2p45h7si3ruk0r8e0brjb328%40group.calendar.google.com&ctz=Europe%2FMadrid"
            scrolling="no"
          />

          <p className="importantDate">
            <span className="date">01 Oct.</span> Límite para entregar Rick and Morty Challenge
          </p>
          <p className="importantDate">
            <span className="date">29 - 30 Oct.</span> Hackathon 2022
          </p>
        </HackathonCalendarContainer>
      </IntersectionObserverSection>
    </div>
  );
}
