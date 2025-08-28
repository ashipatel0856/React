import React from 'react'
import Panchayat from './Panchayat'

const Block = (money) => {
  return (
    <div>
        <h1>this is block component</h1>
        <Panchayat money ={money} />
    </div>
  )
}

export default Block