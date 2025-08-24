import React from 'react'

const Event = () => {
    const handleClick = ()=> {
        alert('you click the button')
    }

    const addition = (a) => {
        alert(a+10)
    }
  return (
    <div>
        <h1>we are learning events</h1>
        <button onClick={handleClick}>click this button</button>
        <button onClick={()=>addition(100)}>Button 2</button>
    </div>
  )
}

export default Event