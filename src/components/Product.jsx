import React from 'react'
const Product = ({title,brand,price,ram,camera}) => {
  return (
    <div>
        <h2>Mobile name ={title}</h2>
        <h3>mobile brand={brand}</h3>
        <h4>mobile price={price}</h4>
        <h4>ram = {ram}</h4>
        <h4>camera={camera}</h4>
    </div>
  )
}

export default Product