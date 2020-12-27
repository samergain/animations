import React from 'react';
import './Clock.css';

const Clock = () => {
  

  const setHour = () => {
    const now = new Date();
    const mins = now.getMinutes();
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    this.style.transform = `rotate(${hourDegrees}deg)`;
  }

  const setMinutes = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    this.style.transform = `rotate(${minsDegrees}deg)`;
  }

  const setSeconds = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    this.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  setInterval(setHour, 1000);
  setInterval(setMinutes, 1000);
  setInterval(setSeconds, 1000);
    return (
        <>
        <div className="clock">
            <div className="clock-face">
                <div className="hand hour-hand" onLoad={setHour}></div>
                <div className="hand min-hand" onLoad={setMinutes}></div>
                <div className="hand second-hand" onLoad={setSeconds}></div>
            </div>
        </div>
        </>
    )
}


export default Clock;