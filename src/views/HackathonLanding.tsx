import { MainContainer } from 'components';
import SideBar from 'components/SideBar/SideBar';
// import { Slider } from "components/Slider/Slider";
import { useState } from 'react';
import { Calendar } from './components/Calendar';
import FromYou from './components/FromYou';
import Guests from './components/Guests';
import Introduction from './components/Introduction';
import Participate from './components/Participate';
import { Timer } from './components/Timer';
import { What } from './components/What';
import { Circle } from './styled-components';

export default function Landing() {
  const [navigate, setNavigate] = useState(false);

  const setTheNavigation = (navigation: boolean) => {
    setNavigate(navigation);
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'flex', flexFlow: 'column wrap' }} className={navigate ? 'fadeOutLeft' : ''}>
        <SideBar />
        <Circle className="first" />
        <Introduction />
        <Circle className="second" />
        <Timer />
        <MainContainer>
          <What />
          <FromYou />
          <Participate setTheNavigation={setTheNavigation} />
          <Guests />
        </MainContainer>
        <Circle className="third" />
        <Calendar />
      </div>
    </>
  );
}
