import React from 'react'
import Person from './Person'
import Product from './components/Product';
import Person2 from './components/Person2'
import Person3 from './components/Person3'
import Laptop from './components/Laptop'
import Event from './components/Event'
import Counter from'./components/Counter'
import Show from './components/ShowProduct'
import FilterProduct from './components/FilterProduct'
const Home = () => {
   return (
    <>
      <div>
        {/* <h1>app is entry point</h1>
   <Person /> */}

        {/* <Product title="Galaxy s24 ultra"
       brand="samsung" 
       price={175000} />

      <Product title="iphone"
       brand="apple" 
       price={165000}
       ram="8 gb"
       camera="200 mp"  
      />

      <Product title="oneplus 14" 
      brand="oneplus"
       price={160000} /> */}
      </div>

     <div>
      {/* <Person2 name="ashish" age="23" salary={5000000} />
      <Person2 name="amar" age="50" salary={5000000} />
      <Person2 name="mahendra" age="40" salary={500000} /> */}
     </div>

     <div>
      {/* <Person3 name = "ashish"
      age = {20}
      pancard={true}
       /> */}
     </div>
    
    <div>
      {/* <Laptop
        brandName="lenove"
        model="yoga"
        price={40000}
      />

      <Laptop
        brandName="dell"
        model="inspiron"
        price={55000}
      />

      <Laptop
        brandName="hp"
        model="probook"
        price={50000}
      /> */}
    </div>

    {/* <Event /> */}

  {/* <Counter /> 
 */}
    

    <div>
         {/* <Show /> */}
    </div>

    <div>
      <FilterProduct /> 
    </div>

    </>
  );
};

export default Home