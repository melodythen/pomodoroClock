import React from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import { ProgressBar } from 'react-bootstrap';
const TimeLeft = ({
    handleSTartStopClick,
    startStopButtontimerLabel,
    timeLeft,timerLabel,
    handleResetButtonClick,
    sessionLength,
    breakLength,
}) => {

 

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('hh:mm:ss', {trim:false});
   let divpercent = null;
    //change timeleft when session length changes
    //this runs whenever session length ( , [ session length]) changes
    if (timerLabel == "Session"){
         divpercent = sessionLength;
    }else if (timerLabel =="Break"){
         divpercent = breakLength;
    }


    return (
        <div className="timeleft">
           <p id="timer-label"> Time Remaining for {timerLabel}</p>
           <ProgressBar now={(timeLeft/divpercent) * 100}/>
            <p  id= "timeLeft" >{formattedTimeLeft} </p>

            
            <button className="btn btn-primary mr-4" onClick={handleSTartStopClick}>{startStopButtontimerLabel}</button>
            <button className="btn btn-danger" id="reset" onClick ={handleResetButtonClick}>Reset</button>

        </div>


    )
}

export default TimeLeft;