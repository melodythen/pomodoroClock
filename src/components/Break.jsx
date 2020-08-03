// break length

import React from 'react';
import moment from 'moment';
import '../style.css'

const Break = ({
    breakLength,
    decrementBreakLengthOneMinute,
    incrementBreakLengthOneMinute
}) => {
   
    
    const breakLengthInMinutes= moment.duration(breakLength,'s').minutes()

    return (
        <div className = "break">
        <p id= "break-label">Break Length</p>
        <p id="break-length">{breakLengthInMinutes} minutes</p>
        <button className="btn btn-secondary"id="break-decrement" onClick={decrementBreakLengthOneMinute}>-</button>
        <button className="btn btn-secondary" id="break-increment" onClick={incrementBreakLengthOneMinute}>+</button>
        </div>
        


    )
        
}

export default Break