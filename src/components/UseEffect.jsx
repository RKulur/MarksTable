
import React, { useState , useEffect } from 'react'

export default function UseEffect() {
    const [name,setName] = useState('sheesh')

    function changeName() {
        let name = prompt('Enter name')
        setName(name);
    }

    const [number,setNumber] = useState(0);
    const [sqrt,setSqrt] = useState(0);

    console.log(number)
    
    
    useEffect(()=>{
      setSqrt(number**2)
    },[number])
    
    function Timer(){
      const [count,setCount] = useState(0)

    useEffect(()=>{
      setTimeout(()=>{
        setCount(count+1)
      },1000)
    })

    return `Count : ${count}`
    }

  return (
    <div>
      <h1>Use Effect</h1>
      <h2> {name} </h2>
      <button onClick={changeName}>ChangeName</button>
      <h1> {number} </h1>
      <button onClick={()=>{ setNumber(number-1) }} >Decrement</button>
      <button onClick={()=>{ setNumber(0) }} >Reset</button>
      <button onClick={()=>{ setNumber(number+1) }} >Increment</button>
      <h1>Square : {sqrt}</h1>
      <h2><Timer/></h2>
    </div>
  )
}
