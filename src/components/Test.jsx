import React, { useState } from 'react'

export default function Test() {
    const [name,setName] = useState({name : 'Ramrahim'})

    function changeName(name_Arg){
        setName({name : name_Arg});
    }
  return (
    <div>
      {name.name}
      <button onClick={()=>{changeName('Manjolika')}}>Change name</button>
    </div>
  )
}
