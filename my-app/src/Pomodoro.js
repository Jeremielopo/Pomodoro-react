import React, { useEffect, useState } from "react";



export default function Pomodoro() {
const [minutes, setMinutes]= useState(25);
const [secondes,setSeconds]= useState(0);
const [isActive, setActive]=useState (false);
const [isFinish,setFinish] = useState(false)

function toggle() {
    setActive(!isActive);
  }




function reset() {
    setActive(false); 
    setMinutes(25);
    setSeconds(0);
    document.querySelector('.first-cloud').style.display = "none" 
    document.querySelector('.first-cloudo').style.display = "none" 
    document.querySelector('.second-cloud').style.display = "none" 
    document.querySelector('.third-cloud').style.display = "none" 
    document.querySelector('.mario').style.display = "block" 
  
  
}

    useEffect(
        () => { 
            let interval = null;
           if(!isActive===true && minutes===25 ){
              
                setSeconds(0)
               
           }
            if(isActive ){
                document.querySelector('.first-cloud').style.display = "block" 
                document.querySelector('.first-cloudo').style.display = "block" 
                document.querySelector('.second-cloud').style.display = "block" 
                document.querySelector('.third-cloud').style.display = "block" 
                document.querySelector('.mario').style.display = "block" 
          interval = setInterval(()=>{
             
            clearInterval(interval);
            if(secondes===0){
                if(minutes !==0 ){
                    setSeconds(59)
                    setMinutes(minutes-1)
                    
                }
               
                else{
                    clearInterval(interval)
                    setFinish(true)
                    document.getElementsByClassName('clouds').style.display = "none" 
                }
            }
            else {
                setSeconds(secondes-1)
            }
            },1000
                
            ) 
            }
            if(!isActive ===true && secondes !== 0 ){
                clearInterval(interval);

            }
           


          
        }, [isActive,secondes,isFinish,minutes]
    )


const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSecondes = secondes <10 ? `0${secondes}`: secondes; 



    return (

        <div className="block">
            <div className="sky">
            <img className="first-cloudo" src="./pixel-clouds-png-4.png" alt="cloud" />
           <img className="first-cloud" src="./pixel-clouds-png-4.png" alt="cloud" />
            <img className="second-cloud" src="./pixel-clouds-png-4.png" alt="cloud" />
            <img className="third-cloud" src="./pixel-clouds-png-4.png" alt="cloud" />
            <img className ={isActive?'mario down':'mario up'}  src="./mario.png" alt="mario" />
            </div>     
            <h1 className="title" >{!isActive ? "Click play to start!" : (!isFinish ? "Focus !" : "Take a break !")}</h1>
                <div className="clouds">
                    
                </div>
            <div className="pomodoro">

                <h2>{timerMinutes} : {timerSecondes}</h2>
                <div>
                    <button onClick={() => !isActive ? setMinutes(minutes + 1) : console.log('nothing')}> + </button>
                    <button onClick={toggle} >{isActive ? "▌▌" : "▶"}</button>
                    <button onClick={() => !isActive ? (minutes>0? setMinutes(minutes - 1) :'') : console.log('nothing')}> - </button>
                    <button onClick={ reset  } > reset </button>
                </div>
            </div >

        </div>
    )
}
