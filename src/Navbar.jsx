import { useState } from "react";
import {Link} from "react-router-dom";
import "./css_files/Navbar.css"
// import {icon} from "./photos/caffeeGif.gif"

const Navbar = ()=>{
    return (<>
        <div className=" flex flex-row justify-between navBox">
            <div className="left flex flex-row">
                <Link className="w-fit p-3 text-xl font-semibold navItems" to="/">Home</Link>     
                <Link className="w-fit p-3 text-xl font-semibold navItems" to="/Product">Product</Link>     
                <Link className="w-fit p-3 text-xl font-semibold navItems" to="/ContactUs">Contact Us</Link>     
                <Link className="w-fit p-3 text-xl font-semibold navItems" to="/AboutUs">About Us</Link>     
            </div>
            <div className="left flex flex-row">
                <Link className="w-fit p-3 text-2xl font-semibold" to="/">
                <img src="src/photos/caffeeGif.gif" alt="icon" />
                </Link>
            </div>
        </div> 
    </>)
}
export default Navbar;