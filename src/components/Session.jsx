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
        <div className= "session">
        <p id= "session-label">Session Length</p>
        <p id="session-length">{sessionLengthInMinutes} minutes</p>
        <button className="btn btn-secondary" id="session-decrement" onClick={decrementSessionLengthOneMinute}>-</button>
        <button className="btn btn-secondary" id="session-increment" onClick={incrementSessionLengthOneMinute}>+</button>
        </div>
        


    )
        
}

export default Session