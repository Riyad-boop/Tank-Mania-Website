import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../../App.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

var countDownDate = new Date("March 22, 2021 09:00:00").getTime() / 1000;
var now = new Date().getTime() / 1000;

class Timer extends React.Component {
    
    render() {
       
      
        const remainingTime = countDownDate - now;
        const days = Math.ceil(remainingTime / daySeconds);
        const daysDuration = days * daySeconds;

        return (
            <div className="timers">
                    <div className = "timerInnerGlow ">
                        <div className = "timerGlow ">
                        <CountdownCircleTimer
                            {...timerProps}
                            colors={[["#218380"]]}
                            duration={daysDuration}
                            initialRemainingTime={remainingTime}
                        >
                            {({ elapsedTime }) =>
                            renderTime("days", getTimeDays(daysDuration - elapsedTime))
                            }
                        </CountdownCircleTimer>
                        </div>
                </div>
                <div className = "timerInnerGlow ">
                    <div className = "timerGlow">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#218380"]]}
                        duration={daySeconds}
                        initialRemainingTime={remainingTime % daySeconds}
                        onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > hourSeconds
                        ]}
                    >
                        {({ elapsedTime }) =>
                        renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                        }
                    </CountdownCircleTimer>
                </div>
                </div>
                <div className = "timerInnerGlow ">
                <div className = "timerGlow">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#218380"]]}
                        duration={hourSeconds}
                        initialRemainingTime={remainingTime % hourSeconds}
                        onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > minuteSeconds
                        ]}
                    >
                        {({ elapsedTime }) =>
                        renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                        }
                    </CountdownCircleTimer>
                </div>
                </div>
                <div className = "timerInnerGlow ">
                <div className = "timerGlow">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#218380"]]}
                        duration={minuteSeconds}
                        initialRemainingTime={remainingTime % minuteSeconds}
                        onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > 0
                        ]}
                    >
                        {({ elapsedTime }) =>
                        renderTime("seconds", getTimeSeconds(elapsedTime))
                        }
                    </CountdownCircleTimer>
                </div>
                </div>
            </div>
          );
    }
}

export default Timer







