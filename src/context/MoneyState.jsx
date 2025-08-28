import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money =1000;
    const dollar =10
    const [counter,setCounter] = useState(0)
    const name = 'Ashish patel'
    
  return (
    <MoneyContext.Provider value ={{
        dollar,
        money,
        counter,
         name,
        setCounter,
       
    }} >{props.children}</MoneyContext.Provider>
  )
}

export default MoneyState