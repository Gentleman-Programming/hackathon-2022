import { device } from 'models';
import styled from 'styled-components';

export const Circle = styled.div`
  width: 44.5rem;
  height: 44.5rem;
  border-radius: 50%;
  border: 3px solid #f3569c;
  z-index: -1;
  &.first {
    position: absolute;
    top: -3%;
    left: -6%;
  }
  &.second {
    position: absolute;
    top: 3%;
    right: -17%;
  }
  &.third {
    position: absolute;
    bottom: 13%;
    right: -17%;
  }
  &.fourth {
    position: absolute;
    bottom: -2%;
    left: -7%;
  }

  @media only screen and ${device.sm} {
    width: 20.5rem;
    height: 20.5rem;
    &.first {
      position: absolute;
      top: -8rem;
      left: -8.5rem;
    }

    &.second {
      position: absolute;
      top: 35rem;
      right: -7rem;
    }
  }
`;

export const HackathonTitle = styled.h1`
  font-family: 'Birthstone';
  font-size: 12.5rem;
  font-weight: 400;
  margin: -2.5rem 0 0;
  color: #f5f0f2;
  letter-spacing: 0.0025rem;
  text-shadow: 0px 3.51px 3.51px #eb1889;

  @media only screen and ${device.sm} {
    margin: -0.5rem 0 0;
    font-size: 6rem;
  }
`;

export const HackathonSubtitle = styled.p`
  margin-top: -2rem;
`;

export const MouseAnimation = styled.div`
  width: 3rem;
  height: 5.5rem;
  border: 2px solid #eb1889;
  border-radius: 2rem;
  margin: 2rem auto;

  .dot {
    width: 1rem;
    height: 1rem;
    background-color: #eb1889;
    border-radius: 50%;
    margin: 1rem auto;
    animation: scroll 3s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(-0.5rem);
    }

    50% {
      transform: translateY(2rem);
    }

    100% {
      transform: translateY(-0.5rem);
    }
  }
`;

export const HackathonTimerContainer = styled.div`
  width: 100%;
  padding: 4.5rem 0;
  border: 1px solid #e731ed80;
  background: radial-gradient(94.24% 733.91% at 2.64% 15.6%, rgba(231, 49, 237, 0.3) 0%, rgba(231, 49, 237, 0.06) 100%);
  backdrop-filter: blur(0.75rem);
`;

export const HackathonTitleContainer = styled.div`
  margin: 3rem auto;
  font-family: 'Montserrat';
  font-size: calc(2rem + 2vw);
`;

export const HackathonParagraph = styled.p`
  font-family: 'Lato';
  font-size: calc(1rem + 0.5vw);
  color: #f5f0f2;
  text-align: left;
  span {
    color: #eb1889;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 4rem;

  @media only screen and ${device.sm} {
    flex-direction: column;
    img {
      width: 80%;
    }
  }
`;

export const HackathonCalendarContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 0.5rem;
  border: 1px solid #e731ed80;
  background: linear-gradient(264.68deg, rgba(231, 49, 237, 0.25) 0%, rgba(231, 49, 237, 0.05) 99.93%);
  backdrop-filter: blur(0.75rem);
  .importantDate {
    font-family: 'Lato';
    font-size: calc(1rem + 0.25vw);
    .date {
      font-size: calc(1.5rem + 0.25vw);
      color: #eb1889;
    }
  }
`;

export const HackathonCalendarIframe = styled.iframe`
  width: 80%;
  height: 25rem;
  border: 0;
`;

export const HackathonText = styled.p`
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  font-size: 3vw;
  margin-top: 2.5rem;

  @media only screen and ${device.sm} {
    margin-top: 30px;
    font-size: 10vw;
  }
`;

export const HackathonFooter = styled.div`
  width: 100%;
  background-color: #e731ed4d;
  background: rgba(231, 49, 237, 0.3);
  backdrop-filter: blur(12px);
  font-size: calc(0.75rem + 0.5vw);
  font-family: 'Lato';
  text-align: center;
  padding: 1.5rem 0.5rem;
  margin-top: 6.25rem;
  box-sizing: border-box;
`;

export const RnMLink = styled.a`
  color: #00c853;
  cursor: pointer;
`;

export const Img = styled.img`
  max-width: 450px;
  height: auto;
  margin: 1rem;
`;
