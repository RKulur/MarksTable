import React, { createContext, useContext, useState } from 'react'

export default function Context() {
    const Context = createContext()

    function F1(){
        const [user,setUser] = useState('Ramrahim')
        const [pNo,setpNo] = useState('252525')
        return(
            <>
            <h1>Function 1</h1>
            <Context.Provider value={{user,pNo}}>
                <F2/>
            </Context.Provider>
            </>

        )
    }

    function F2(){
        const items = useContext(Context)
        return(
            <>
            <h1>F2 : {`${items.user} ${items.pNo}`}</h1>
            </>
        )
    }
    return (
        <div>
            <F1/>
    </div>
  )
}
