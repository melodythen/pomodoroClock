import React, {useState} from 'react';
import Break from './components/Break'
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
function App() {
//BREAK : putting these attributes on app so timer can access
  const [breakLength, setBreakLength ] = useState(300); //returns tupple of break length (s) and setter
    
  const decrementBreakLengthOneMinute = () =>{
      const newBreakLength = breakLength- 60;
      if (newBreakLength < 0){
          setBreakLength(0);
      }else{
          setBreakLength(newBreakLength);
      }
  }

  const incrementBreakLengthOneMinute = () =>{
      setBreakLength(breakLength+ 60);
  }

 //SESSION
  const [sessionLength, setSessionLength ] = useState(60*25); //returns tupple of session length (s) and setter
  
  const decrementSessionLengthOneMinute = () =>{
      const newSessionLength = sessionLength- 60;
      if (newSessionLength < 0){
          setSessionLength(0);
      }else{
          setSessionLength(newSessionLength);
      }
  }
  
  const incrementSessionLengthOneMinute = () =>{
      setSessionLength(sessionLength+ 60);
  }

  return (
    <div className="App">
      <Break
        breakLength = {breakLength}
        decrementBreakLengthOneMinute = {decrementBreakLengthOneMinute}
        incrementBreakLengthOneMinute = {incrementBreakLengthOneMinute}
        
        />

       <TimeLeft 
        sessionLength = {sessionLength}
        breakLength ={breakLength}
        
        />
      <Session
        sessionLength= {sessionLength}
        decrementSessionLengthOneMinute={decrementSessionLengthOneMinute}
        incrementSessionLengthOneMinute={incrementSessionLengthOneMinute}
      />
    </div>
  );
}

export default App;
