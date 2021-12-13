import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeadJumbo from "./components/HeadJumbo";
import Products from "./components/Products";
import {ProductData} from "./components/Products/data";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/Footer";
// import Registration from "./pages/RegisterPage/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Register from "./pages/RegisterPage/Register";
import RegisterForm from "./pages/RegisterPage";


function App() {
  return (
    // <div>
    //   <Navbar />
    // </div>
    
    <Router>
      <GlobalStyle />
      
      
      <HeadJumbo />
      <Products heading='Select Your Favorites' data={ProductData}/>
      <RegisterForm />
      <Footer />
    </Router>
  );
}

export default App;
