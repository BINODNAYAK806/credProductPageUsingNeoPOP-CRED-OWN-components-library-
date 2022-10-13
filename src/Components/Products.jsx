import React, { useState } from 'react'
import { useEffect } from 'react'
// import Product from './product'
import Product from './Product'
const Products = () => {

   const  dis ={
    backgroundColor :"black",
//     display: "flex",
//   flexDirection: "rowReverse"

display: "grid",
gridTemplateColumns: "repeat(3, 1fr)"
// grid-template-columns: ;
   } 
const [data,setdata]= useState([])

useEffect(() => {
    get()
  }, []);

function get(){

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((users) => setdata(users))
    
    console.log(data)


    
}
console.log(data)




  return (
    <div style={dis} >
        { 
              
              data.map((elem) => {
              
               return <Product img={elem.image} title={elem.title}/>
              })
            
            }
        



    </div>
  )
}

export default Products