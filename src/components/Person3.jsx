import React from 'react'

const Person3 = ({name ,age,pancard}) => {

  return (
    <div>
        <h1>Name ={name}</h1>
        <h3>
            {age>18 ? <h1>you can drive car</h1> : <h1>you can not drive car</h1>}
        </h3>
         <h1>{pancard ? <h1>you can open account in our bank</h1>:""}</h1>
        <h2>{pancard && <p>you can open account</p>}</h2>
    </div>
  )
}

export default Person3