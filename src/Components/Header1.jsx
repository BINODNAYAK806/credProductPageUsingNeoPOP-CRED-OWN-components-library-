import React from 'react'

import { Header } from '@cred/neopop-web/lib/components';


export default function Header1() {

  return (
    <div  style={{backgroundColor: "#121212" ,marginBottom:"20px"}}>

    
    <Header  
    heading="buy on CRED store"
    description="buy on CRED  and get exclusive rewards"
    onBackClick={() => {
        console.log('back clicked');
    }}
    
/>
</div>
  )
}
