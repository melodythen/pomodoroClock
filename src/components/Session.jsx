// session length

import React from 'react';
import moment from 'moment';

const Session = (props) => {
    const{
        sessionLength,
        decrementSessionLengthOneMinute,
        incrementSessionLengthOneMinute,
    } = props;

    
    const sessionLengthInMinutes= moment.duration(sessionLength,'s').minutes()

    return (
        <div>
        <p id= "session-label">Session</p>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button id="session-decrement" onClick={decrementSessionLengthOneMinute}>-</button>
        <button id="session-increment" onClick={incrementSessionLengthOneMinute}>+</button>
        </div>
        


    )
        
}

export default Session