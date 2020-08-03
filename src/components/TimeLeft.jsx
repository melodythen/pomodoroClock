import React from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
const TimeLeft = ({
    handleSTartStopClick,
    startStopButtontimerLabel,
    timeLeft,timerLabel,
    handleResetButtonClick
}) => {

 

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('hh:mm:ss', {trim:false});
   
    //change timeleft when session length changes
    //this runs whenever session length ( , [ session length]) changes


    return (
        <div className="timeleft">
           <p id="timer-label"> Time Remaining for {timerLabel}</p>
            <p className="countdown" id= "timeLeft" >{formattedTimeLeft} </p>
            
            <button className="btn btn-primary mr-4" onClick={handleSTartStopClick}>{startStopButtontimerLabel}</button>
            <button className="btn btn-danger" id="reset" onClick ={handleResetButtonClick}>Reset</button>

        </div>


    )
}

export default TimeLeft;