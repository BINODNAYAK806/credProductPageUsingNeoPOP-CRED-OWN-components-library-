import React from 'react'
import Header1 from './Header1'
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';

// import product from './product'
// import product from './product'
// import product from './product'
// import product from './product'
// import Product from './Product'
import Products from './Products'
export const Home = () => {

  return (
    <div>
        
        <Header1/>
        <SearchBar Style={{}} colorConfig={{
    activeBorder: "#0d0d0d",
    backgroundColor: "#ffffff",
    border: "#E0E0E0",
    closeIcon: "#E0E0E0",
  }}
  handleSearchInput={function noRefCheck() {}}
  iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
  inputColorConfig={{
    caretColor: "#144CC7",
    errorColor: "#EE4D37",
    labelColor: "rgba(13,13,13, 0.5)",
    placeholderColor: "rgba(13,13,13, 0.3)",
    textColor: "rgba(13,13,13, 0.9)",
  }}
  onSubmit={function noRefCheck() {}}
  placeholder="search query here"
/>;
        {/* <h1>binod</h1> */}
        <Products/>


    </div>
  )
}
