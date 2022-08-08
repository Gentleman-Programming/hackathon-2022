import { useState, useEffect } from "react";
import styled from "styled-components";

const defaultTime = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
}

const Timer = styled.ul`
    .timerItem {
        display: inline-block;
        font-size: 12.5rem;
        list-style-type: none;
        padding: 1rem;
        .info {
            display: block;
            font-size: 2.5rem;
        }
        &.dots {
            color: #eb1889;
        }
    }
`;

export function CountdownTimer() {
    const [time] = useState(defaultTime);

    useEffect(() => {
        setInterval(() => {

        }, 1000)
    }, [])

    return (
        <>
            <Timer>
                <li className="timerItem">{time.days}<span className="info">Días</span></li>
                <li className="timerItem">{time.hours}<span className="info">Horas</span></li>
                <li className="timerItem">{time.minutes}<span className="info">Minutos</span></li>
                <li className="timerItem">{time.seconds}<span className="info">Segundos</span></li>
            </Timer>
        </>
    );
}