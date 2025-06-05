import { useState} from 'react';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home.jsx"
import ProductPage from "./ProductPage.jsx"
import ContactUs from "./ContactUs.jsx"
import AboutUs from "./AboutUs.jsx"
import Footer from './Footer.jsx';

function App() {
  window.addEventListener("scroll",(item)=>{
    document.querySelectorAll(".fade-in").forEach(el => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });

  })
  
  return (
    <>
        <Navbar/>
        <div className='pt-12'>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/Product' Component={ProductPage}/>
            <Route path='/ContactUs' Component={ContactUs}/>
            <Route path='/AboutUs' Component={AboutUs}/>
          </Routes>
        </div>
        <Footer/>
        
    </>
  )
}

export default App
