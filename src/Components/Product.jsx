import React from 'react'
import Page from './Add'
import { Button } from '@cred/neopop-web/lib/components';
export default function Product({img,title}) {

const pro ={
    backgroundColor :"white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    margin : "20px",
    padding: "20px"
} 
  return (
    <div style={pro}>
        <img style={{height:'500px', width : "400px"}} src={img} alt="ddd"  />
        <h5 style={{textAlign:"center",}} >{title}</h5>
        <div style={{display:"flex-row", padding:"2%"}} >
            <Button style={{marginLeft : "60px", marginRight: "45px"}}
            variant="secondary"
            kind="flat"
            size="big"
            // colorMode="dark"
           
        >
            Add
        </Button>
        
        <Button
            variant="secondary"
            kind="flat"
            size="big"
            // colorMode="dark"
           
        >
            Buy now
        </Button>   </div> 
        
    </div>
  )
}
