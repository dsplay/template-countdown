import React, { useEffect, useState } from 'react';
import {
  FitText,
} from '@dsplay/react-template-utils';
import './timer.sass';
import moment from 'moment';

const Timer = (props) => {
  const { timeTillDate, timeFormat } = props;
  const [counter, setCounter] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('DD');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      setCounter({
        days, minutes, hours, seconds,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ds-container countdown">
      <div className="ds-grid-item days">
        <div className="time-value">
          <FitText>{counter.days}</FitText>
        </div>
        <div className="time-title">
          <FitText>Days</FitText>
        </div>
      </div>
      <div className="divider">
        <FitText>:</FitText>
      </div>
      <div className="ds-grid-item hours">
        <div className="time-value">
          <FitText>{counter.hours}</FitText>
        </div>
        <div className="time-title">
          <FitText>Hours</FitText>
        </div>
      </div>
      <div className="divider hidden">
        <FitText>:</FitText>
      </div>
      <div className="ds-grid-item minutes">
        <div className="time-value">
          <FitText>{counter.minutes}</FitText>
        </div>
        <div className="time-title">
          <FitText>Minutes</FitText>
        </div>
      </div>
      <div className="divider">
        <FitText>:</FitText>
      </div>
      <div className="ds-grid-item seconds">
        <div className="time-value">
          <FitText>{counter.seconds}</FitText>
        </div>
        <div className="time-title">
          <FitText>Seconds</FitText>
        </div>
      </div>
    </div>
  );
};

export default Timer;
