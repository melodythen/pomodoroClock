import React, { useState, useEffect } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
const TimeLeft = ({
    sessionLength,
    breakLength
}) => {

    const [timeLeft, setTimeLeft] = useState(sessionLength); 

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss')
   
    //change timeleft when session length changes
    //this runs whenever session length ( , [ session length]) changes
    useEffect(() => {
        setTimeLeft(sessionLength)
    },[sessionLength]) 

    
    return (
        <div>
           <p>I am time left</p>
            {formattedTimeLeft}

        </div>


    )
}

export default TimeLeft;