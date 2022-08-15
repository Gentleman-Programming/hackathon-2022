import { Routes } from 'models/route';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import IconToText from './IconToText';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-start;
  padding: 0;
`;

const Li = styled.li`
  margin: 10px 0;
`;

interface Props {
  clicked?: Function;
}

export default function SideBarItems(props: Props) {
  const isActive = (hash: string) => {
    return window.location.hash === `#${hash}`;
  };

  const items = [
    {
      hash: Routes.INTRODUCTION,
      text: 'Introducción',
      icon: 'I'
    },
    {
      hash: Routes.TIMER,
      text: 'Cúando ?',
      icon: 'C'
    },
    {
      hash: Routes.WHAT,
      text: 'Qué es ?',
      icon: 'Q'
    },
    {
      hash: Routes.FROMYOU,
      text: 'Qué se espera de ti ?',
      icon: 'QT'
    },
    {
      hash: Routes.PARTICIPATE,
      text: 'Cómo participar ?',
      icon: 'CP'
    },
    {
      hash: Routes.GUESTS,
      text: 'Invitados especiales',
      icon: 'IP'
    },
    {
      hash: Routes.CALENDAR,
      text: 'Fechas importantes',
      icon: 'FI'
    },
  ];

  return (
    <Ul className="fadeInRight">
      {items.map(item => (
        <Li
          key={item.hash}
          onClick={() => {
            if (props.clicked) props.clicked(false);
          }}
        >
          <NavHashLink
            activeClassName="active"
            to={`/hackathon#${item.hash}`}
            isActive={() => isActive(item.hash)}
          >
            <IconToText text={item.text} icon={item.icon}></IconToText>
          </NavHashLink>
        </Li>
      ))}
    </Ul>
  );
}
