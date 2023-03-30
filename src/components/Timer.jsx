import React, { useEffect, useState } from 'react'

export default function Timer() {
    const timerDate = new Date()
    timerDate.setHours(0)
    timerDate.setMinutes(0)
    timerDate.setSeconds(0)
    timerDate.setDate(1)
    timerDate.setMonth(3)

    const [date,setDate] = useState(new Date())

    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [hours,setHours] = useState(0)
    const [days,setDays] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setDate(new Date())
            let currentDate = timerDate - date;
            setSeconds(Math.floor(currentDate / 1000) % 60) 
            setMinutes(Math.floor(currentDate / 1000 / 60) % 60) 
            setHours(Math.floor(currentDate / 1000 / 60 / 60) % 24) 
            setDays(Math.floor(currentDate / 1000 / 60 / 60 / 24)) 
        },1000)
    },[date])
    console.log(days.toLocaleString().length == 1)
  return (
  <div style={{display : 'flex' , flexDirection : 'column', alignItems : 'center'}}>
  <h2>Timer ends on <small style={{color : 'red'}}>{timerDate.toDateString()}</small></h2>
    <div style={{display : 'flex',gap : '20px'}}>
      <div style={{display : 'flex',padding : '30px',borderRadius : '100px',backgroundColor : 'black',color : 'white',border : '2px solid',height : '100px',width : '100px',flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}><h1 style={{margin : '0',padding : '0',fontSize : '50px'}}>{days.toLocaleString().length == 1 ? `0${days}` : days}</h1><p>Days</p></div>
      <div style={{display : 'flex',padding : '30px',borderRadius : '100px',backgroundColor : 'black',color : 'white',border : '2px solid',height : '100px',width : '100px',flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}><h1 style={{margin : '0',padding : '0',fontSize : '50px'}}>{hours.toLocaleString().length == 1 ? `0${hours}` : hours}</h1><p>Hours</p></div>
      <div style={{display : 'flex',padding : '30px',borderRadius : '100px',backgroundColor : 'black',color : 'white',border : '2px solid',height : '100px',width : '100px',flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}><h1 style={{margin : '0',padding : '0',fontSize : '50px'}}>{minutes.toLocaleString().length == 1 ? `0${minutes}` : minutes}</h1><p>Minutes</p></div>
      <div style={{display : 'flex',padding : '30px',borderRadius : '100px',backgroundColor : 'black',color : 'white',border : '2px solid',height : '100px',width : '100px',flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}><h1 style={{margin : '0',padding : '0',fontSize : '50px'}}>{seconds.toLocaleString().length == 1 ? `0${seconds}` : seconds}</h1><p>Seconds</p></div>
    </div>
    </div>
  )
}
