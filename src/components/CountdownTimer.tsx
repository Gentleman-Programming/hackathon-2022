import { useEffect, useState } from 'react';
import styled from 'styled-components';

const defaultTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

const Timer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  .timerItem {
    font-size: 12.5rem;
    padding: 2rem;
    text-align: center;
    .info {
      display: block;
      text-align: center;
      font-size: 2.5rem;
    }
  }
`;

export function CountdownTimer(props: any) {
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const countdownTime = new Date(props.countdownDate).getTime();
      updateTime(countdownTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [props.countdownDate]);

  const updateTime = (countdownTime: number) => {
    const second = 1000,
      minute = (second * 60),
      hour = (minute * 60),
      day = (hour * 24);
    let now = new Date().getTime(),
      distance = countdownTime - now;
    const days = Math.floor(distance / day)*-1,
      hours = Math.floor((distance % day) / hour)*-1,
      minutes = Math.floor((distance % hour) / minute)*-1,
      seconds = Math.floor((distance % minute) / second)*-1;

    setTime({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  };

  return (
    <>
      <Timer>
        <div className="timerItem">
          {time.days} <span className="info">Días</span>
        </div>
        <div className="timerItem">
          {time.hours} <span className="info">Horas</span>
        </div>
        <div className="timerItem">
          {time.minutes} <span className="info">Minutos</span>
        </div>
        <div className="timerItem">
          {time.seconds} <span className="info">Segundos</span>
        </div>
      </Timer>
    </>
  );
}
