import React from 'react'
import MoneyContext from '../context/MoneyContext'
import { useContext } from 'react'


const People = () => {
    const data = useContext(MoneyContext)
  return (
    <div>
        <h1>this is people component = </h1>
        <h3>Money = {data.money}</h3>
        <h3>Doller = {data.doller}</h3>
        <h3>Counter ={data.counter} </h3>
        <button onClick ={() => data.setCounter(data.counter +1)} >Increment</button>
    </div>
  )
}

export default People