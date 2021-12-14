import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeadJumbo from "./components/HeadJumbo";
import Products from "./components/Products";
import {ProductData} from "./components/Products/data";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
<<<<<<< HEAD
// import RegisterForm from "./pages/RegisterPage";
import Checkout from "./pages/CheckoutPage";
import OrderConfirm from "./pages/OrderConfirm";
import Product from "./components/Products/Product";
import Register from "./components/Register";
import Login from "./components/Login";
import LoginForm from "./pages/LoginPage";

=======
import RegisterForm from "./pages/RegisterPage";
import LoginForm from "./pages/LoginPage";
import Checkout from "./pages/CheckoutPage";
import OrderConfirm from "./pages/OrderConfirm";
import Product from "./components/Products/Product";
>>>>>>> origin/myles-backend


function App() {
  return (
<<<<<<< HEAD
    <>
    {/* <Navbar /> */}
    {/* <HeadJumbo />
    <Products /> */}
    {/* <Register /> */}
    <Login />
    {/* <OrderConfirm /> */}

    </>
   
   /* <Navbar /> */
   /* <Sidebar />
    
    <Routes>
        
        <Route path="/" element={<HeadJumbo/>} exact/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/orderconfirmation" element={<OrderConfirm/>} />
        <Route path="/products" element={<Products />} />
        <Route element={<Footer />} />
        
    </Routes>
    <Footer /> */
    


    //  <GlobalStyle />
    //  <Routes /> 

    // <BrowserRouter/>
    // <Navbar/>
    // <HomePage />
    // <Products /> 
    // <Products heading='Select Your Favorites' data={ProductData}/> 


    //  <HeadJumbo />
    // <Checkout />
    // <Products heading='Select Your Favorites' data={ProductData}/>
    // <RegisterForm />
    // <LoginForm />  

    //  <Footer /> 

=======
    // <div>
    //   <Navbar />
    // </div>
    <>
   <Navbar />
    
    <Routes>
        
        <Route path="/" element={<HeadJumbo/>} exact/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/orderconfirmation" element={<OrderConfirm/>} />
        <Route path="/products" element={<Products />} />
        <Route element={<Footer />} />
        
    </Routes>
    <Footer />
    </>
    

    // <Router>
    //   <GlobalStyle />
      
      
    //   <HeadJumbo />
    //   <Products heading='Select Your Favorites' data={ProductData}/>
    //   <RegisterForm />
    //   <LoginForm />
    //   {/* <OrderConfirm /> */}
    //   <Checkout />
    //   <Footer />
    // </Router>
>>>>>>> origin/myles-backend
  );
}

export default App;
