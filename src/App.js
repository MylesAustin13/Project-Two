import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeadJumbo from "./components/HeadJumbo";
import Products from "./components/Products";
import {ProductData} from "./components/Products/data";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RegisterForm from "./pages/RegisterPage";
import LoginForm from "./pages/LoginPage";


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
      <LoginForm />
      <Footer />
    </Router>
  );
}

export default App;
