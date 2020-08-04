import React, {useState, useEffect, Component} from 'react';
import Break from './components/Break'
import Session from './components/Session';
import DigitalClock from './components/Clock';
import TimeLeft from './components/TimeLeft';
import Unsplash, {toJson} from 'unsplash-js';



function App() {
  document.body.style.backgroundColor= "#edf5e6";
  //API USAGE
  const unsplash = new Unsplash({ accessKey: "I0vIEW0JR-4DUPd7urCdrkyP6USFoFCSMMUqXh0ggMI" });
  let img_url = "";
  /***** UN COMMENT TO LET AUTO GENERATE BACKGROUND!!!  */
  // unsplash.photos.getRandomPhoto({query:"plain"})
  // .then(toJson)
  // .then(json => {
  //   // Do something with the json object
  //   console.log(json.urls.raw + "auto=format");
  //   img_url = json.urls.raw + "auto=format";
  //   document.body.style.backgroundImage = "url(" + img_url + ")";
  // });

//BREAK : putting these attributes on app so timer can access
  const [currentSessionType, setCurrentSessionType]= useState('Session'); //be session or break
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength ] = useState(60*5); //returns tupple of session length (s) and setter
  const [breakLength, setBreakLength ] = useState(300); //returns tupple of break length (s) and setter
  const [timeLeft, setTimeLeft] = useState(sessionLength); 
  const [readyStatus, setReadyStatus] = useState(true);

 //SESSION
  
 const decrementSessionLengthOneMinute = () =>{
     const newSessionLength = sessionLength- 60;
     if (newSessionLength < 1){
         setSessionLength(60);
     }else{
         setSessionLength(newSessionLength);
     }
 }
 
 const incrementSessionLengthOneMinute = () =>{
     setSessionLength(sessionLength + 60);
 }


 useEffect(() => {
  if(currentSessionType == "Session"){
    setTimeLeft(sessionLength);
    
  }else if (currentSessionType == "Break"){
    setTimeLeft(breakLength);
  }
},[currentSessionType,sessionLength,breakLength]);


  useEffect(()=> {
    if (timeLeft == 0){
      if (currentSessionType === "Session"){
        setCurrentSessionType("Break");
        setTimeLeft(breakLength);
 
        clearInterval(intervalId);
        setIntervalId(null);

        setReadyStatus(false);
       

        
      }else if (currentSessionType === "Break"){
        setCurrentSessionType("Session");
        setTimeLeft(sessionLength);
        clearInterval(intervalId);
        setIntervalId(null);
 
        setReadyStatus(false);


        
       

      }
    }

  }, [breakLength,currentSessionType,sessionLength,timeLeft]);
  //interval Id = null then everything is stopped 


  // START BUTTON
  const isStarted = intervalId != null; 

  const handleSTartStopClick = () => {
      // decrement timeleft by 1 every second (1000 ms)
      //use setInterval
  //if we are in started mode, have a stop timer (clear interval)  
  setReadyStatus(true);

      if ( isStarted){
          clearInterval(intervalId);
          setIntervalId(null);
          console.log("stoped");
      }else {
        
          const newIntervalId = setInterval(() => {
              setTimeLeft(prevTimeLeft => prevTimeLeft -1)
          }, 100);
          setIntervalId(newIntervalId);
      }
  }
  
  
  const decrementBreakLengthOneMinute = () =>{
      const newBreakLength = breakLength- 60;
      if (newBreakLength < 1){
          setBreakLength(60);
      }else{
          setBreakLength(newBreakLength);
      }
  }

  const incrementBreakLengthOneMinute = () =>{
      setBreakLength(breakLength+ 60);
  }



  //reset button: clear timeout interval, set intervalID to null, set sessiontype = session , reset session length to 25, and break to 5 , initial session length =25 
  const handleResetButtonClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLength (60*25);
    setBreakLength (300);
    setTimeLeft(60*25);

  }


  return (
    <div className="App">
      <div className="timecontainer">
        <DigitalClock/>
      </div>
      <div className="row">
       
        <div>
          <Session
            sessionLength= {sessionLength}
            decrementSessionLengthOneMinute={decrementSessionLengthOneMinute}
            incrementSessionLengthOneMinute={incrementSessionLengthOneMinute}
          />
        </div>
        <div >
          <Break
            breakLength = {breakLength}
            decrementBreakLengthOneMinute = {decrementBreakLengthOneMinute}
            incrementBreakLengthOneMinute = {incrementBreakLengthOneMinute}
            />

        </div>
        
      </div>

        <TimeLeft 
          sessionLength = {sessionLength}
          breakLength ={breakLength}
          timerLabel = {currentSessionType}
          handleSTartStopClick = {handleSTartStopClick}
          startStopButtontimerLabel={isStarted? "Stop" : "Start"}
          timeLeft = {timeLeft}
          handleResetButtonClick= {handleResetButtonClick}
          readyStatus={readyStatus}
          />  
     
        

    </div>

    
  );
  
}

export default App;
