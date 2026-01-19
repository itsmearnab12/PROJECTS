import React from 'react'

import Aboutpage from "../assets/Aboutpageimg.png";
import iconone from "../assets/iconone.png";
import icontwo from "../assets/icontwo.png";
import iconthree from "../assets/iconthree.png";
import Ourstory from "../assets/storypage.png";
import "./Storypage.css"

export const Storypage = () => {
  return (
    <>
      <div className="Storypage">
        <img src={Aboutpage} alt="" />
        <div className="Storypagetext">
          <h2>About Us</h2>
          <p>
            Inspired by the art of coffee, we serve thoughtfully brewed beverages made from ethically sourced beans. Every sip reflects our commitment to quality, warmth, and community.
          </p>
        </div>
      </div>
      <div className="sectiontwo">
        <h1>THE BEST COFFEE-SHOP</h1>
        <p>At our café, we craft every cup with care using premium ingredients and expert brewing techniques. From the first aroma to the last sip, we deliver a rich and satisfying coffee experience you’ll love.</p>
        <div className="Storypahesectwohead">
          <div className="Storypagesectwo">
            <img src={iconone} alt="" />
            <h4>BEST BEANS</h4>
            <p>We source high-quality coffee beans from trusted farms to ensure bold flavor, freshness, and perfect aroma in every cup.</p>
          </div>
          <div className="Storypagesectwo">
            <img src={icontwo} alt="" />
            <h4>QUALITY MILK</h4>
            <p>Only fresh, carefully selected milk is used to create smooth, creamy textures that perfectly complement our coffee.</p>
          </div>
          <div className="Storypagesectwo">
            <img src={iconthree} alt="" />
            <h4>PERFECT BLEND</h4>
            <p>Our signature blends are crafted by expert roasters, balancing strength and smoothness for a consistently great taste.</p>
          </div>
        </div>
      </div>
      <div className="Ourstoryhead">
        <img src={Ourstory} alt="" />
        <div className="Ourstorytext">
          <h2>OUR STORY</h2>
          <p>
            Every great day begins with a great cup of coffee—and ours begins long before it reaches your hands. From carefully selected farms to expert roasting, we believe coffee is more than a drink; it’s an experience crafted with patience, passion, and purpose.

            We source premium beans from trusted growers who share our respect for quality and sustainability. Each bean is roasted to bring out its natural character—bold, smooth, and full of depth. Paired with fresh ingredients and perfected brewing techniques, every cup tells a story of balance and care.

            Our café is a place to pause, connect, and feel at home. Whether you’re starting your morning, meeting friends, or finding a quiet moment for yourself, we’re here to serve comfort in every sip. Because great coffee doesn’t just wake you up—it brings people together.
          </p>
        </div>
      </div>
    </>
  )
}