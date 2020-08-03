// break length

import React from 'react';
import moment from 'moment';

const Break = ({
    breakLength,
    decrementBreakLengthOneMinute,
    incrementBreakLengthOneMinute
}) => {
   
    
    const breakLengthInMinutes= moment.duration(breakLength,'s').minutes()

    return (
        <div>
        <p id= "break-label">Break</p>
        <p id="break-length">{breakLengthInMinutes}</p>
        <button id="break-decrement" onClick={decrementBreakLengthOneMinute}>-</button>
        <button id="break-increment" onClick={incrementBreakLengthOneMinute}>+</button>
        </div>
        


    )
        
}

export default Break