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
      </div>
      <div className='Contactpageaddress'>
        <div>
          <h4>Visit Our Café</h4>
          <p>Address: 123 Brew Street, Coffee Town</p>
          <p>Open daily from 8:00 AM – 10:00 PM</p>
        </div>
        <div>
          <h4>Contact Details</h4>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Email: hello@yourcoffeeshop.com</p>
        </div>
      </div>
      <div className="contacticonstext">
        <h3>Follow Us</h3>
        <p>Stay connected and never miss a sip. Follow us on social media for updates, new brews, and special offers.</p>
      </div>
      <div className="contactpageicons">
        <span><FaInstagram /></span>
        <span><FaFacebook /></span>
        <span><FaYoutube /></span>
      </div>
    </div>
  )
}

