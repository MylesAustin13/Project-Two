import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeadJumbo from "./components/HeadJumbo";
import Products from "./components/Products";
import {ProductData} from "./components/Products/data";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RegisterForm from "./pages/RegisterPage";
import LoginForm from "./pages/LoginPage";
import Checkout from "./pages/CheckoutPage";
import OrderConfirm from "./pages/OrderConfirm";
import Product from "./components/Products/Product";
import OrdersPage from "./pages/OrdersPage";
import FavoritesPage from "./pages/FavoritesPage";


function App() {
  return (
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
        <Route path="/myorders" element={<OrdersPage />} />
        <Route path="/myfavorites" element={<FavoritesPage />} />
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
  );
}

export default App;
