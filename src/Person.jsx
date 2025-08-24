import React from 'react'
import Superman from './Superman'

const Person = () => {

      const person = {
        name:'ashish',
        age:20,
        salary: '2crore',
        pin:212507
      }
      
  return (
    <>
      <div>
     <p>name = {person.name}</p>
     <p>age = {person.age}</p>
     <p>salary = {person.salary}</p>
    </div>

    <Superman />
    </>
  )
}

export default Person