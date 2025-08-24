import React from 'react'

const ShowProduct = () => {
    
    let products =[
        {id:1,title:'iphone-15',price:150000},
        {id:2,title:'iphone-16',price:165000},
        {id:3,title:'iphone-17',price:170000},
        {id:4,title:'iphone-18',price:185000},


    ];
  return (
    <div>
      {products.map((data) =>
      <div key ={data.id}>
        <h1>Title = {data.title}</h1>
        <h2>Price = {data.price}</h2>

      </div>
    )}
    </div>
  )
}

export default ShowProduct