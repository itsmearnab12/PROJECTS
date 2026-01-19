import React from 'react'
import Contactpagebg from "../assets/Contactpage.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Contactpage.css"

export const Contactpage = () => {
  return (
    <div className="Contactpagehead">
      <img src={Contactpagebg} alt="" />
      <div className='Contactpagetext'>
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Whether you have a question about our coffee, want to share feedback, or are interested in collaborating with us, feel free to reach out. Our team is always happy to connect.</p>
        <span><FaInstagram /></span>
        <span><FaFacebook /></span>
        <span><FaYoutube /></span>
      </div>
    </div>
  )
}

