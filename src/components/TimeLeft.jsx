import React, { useState } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
const TimeLeft = ({
    sessionLength,
    breakLength
}) => {

    const [timeLeft, setTimeLeft] = useState(sessionLength); 

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss')
    return (
        <div>
           <p>I am time left</p>
            {formattedTimeLeft}

        </div>


    )
}

export default TimeLeft;