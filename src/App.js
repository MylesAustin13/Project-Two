import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeadJumbo from "./components/HeadJumbo";
import Products from "./components/Products";
import {ProductData} from "./components/Products/data";
// import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/Footer";


function App() {
  return (
    // <div>
    //   <Navbar />
    // </div>
    
    <Router>
      <GlobalStyle />
      {/* <Navbar /> */}
      <HeadJumbo />
      <Products heading='Select Your Favorites' data={ProductData}/>
      <Footer />
    </Router>
  );
}

export default App;
