import React from "react";
import { Router } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadJumbo from "../../components/HeadJumbo";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
// import ProductList from "../../components/ProductList";
import Sidebar from "../../components/Sidebar";


const HomePage = ()=>{
    return(
        <>
            <HeadJumbo />
            <Navbar />
            <Sidebar />
            
            <Footer/>

        </>
    )
}
export default HomePage;