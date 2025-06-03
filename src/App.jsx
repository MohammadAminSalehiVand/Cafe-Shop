import { useState} from 'react';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home.jsx"
import ProductPage from "./ProductPage.jsx"
import ContactUs from "./ContactUs.jsx"
import AboutUs from "./AboutUs.jsx"

function App() {
  
  return (
    <>
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/Product' Component={ProductPage}/>
            <Route path='/ContactUs' Component={ContactUs}/>
            <Route path='/AboutUs' Component={AboutUs}/>
          </Routes>
        </div>
        
    </>
  )
}

export default App
