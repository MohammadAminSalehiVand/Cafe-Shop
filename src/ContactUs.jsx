import React, { Component,useState } from 'react'
import "./css_files/ContactUs.css"


const ContactUs = () => {


    return (  
    <>
        <div className="contactUsBox flex flex-row flex-wrap justify-around">
            <div className="box1 boxes flex flex-row w-full mt-10 mb-10 bg-gray-300 p-10 border-4 border-blue-600 rounded-sm">
                <img src="./src/photos/phoneIcone.png" className='w-2xs'/>
                <p className=" text-5xl self-center ml-10 font-extrabold">021-11111111</p>
            </div>
            <div className="box2 boxes flex flex-row w-full mt-10 mb-10 bg-gray-300 p-10 border-4 border-blue-600 rounded-sm">
                <img src="./src/photos/messageIcone.png" className='w-2xs'/>
                <div className='self-center ml-10'>
                    <p className=" text-6xl  font-extrabold">SEND US A MESSAGE</p>
                    <textarea placeholder='Tell Us Your Thought' className='text-gray-800 w-full'></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>

    </>);
}
 
export default ContactUs;