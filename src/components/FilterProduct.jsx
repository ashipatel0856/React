import React from 'react'

const FilterProduct = () => {
    const product=[
        {id:1,title:'iphone-16',category:'mobiles',price:90000},
        {id:2,title:'hp probook',category:'laptops',price:190000},
        {id:3,title:'mi tab',category:'tablets',price:9000},
        {id:4,title:'sony camera',category:'camera',price:29000},

    ];

    const filterdata =product.filter((data) => data.category =='camera');
    console.log(filterdata)
  return  <div>
        {filterdata.map((data) => <div key = {data.id}>
            <h1>{data.title}</h1>
            <p>{data.price}</p>
        </div>)}
    </div>
  
};

export default FilterProduct