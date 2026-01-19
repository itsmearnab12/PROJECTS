import React from 'react'
import heroImage from '../assets/Heroimg.png'
import Fifthsectionimg from "../assets/Fifthsectionimg.png"
import LogoImage from '../assets/Logo.png'
import ImgOne from '../assets/Coffeeimg1.jpg'
import ImgTwo from '../assets/Coffeeimg2.jpg'
import ImgThird from '../assets/Coffeeimg3.jpg'
import ImgFourth from '../assets/Coffeeimg4.jpg'
import Firthreview from '../assets/Profilepic1.jpg'
import Secondreview from '../assets/Profilepic2.jpg'
import Thirdreview from '../assets/Profilepic3.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./Homepage.css"

export const Homepage = () => {
    return (
        <>
            <div className='Hero'>
                <img src={heroImage} alt="" />
                <div className="herotext">
                    <h1>Savor the Perfect Brew!</h1>
                    <p>From the first crack of the bean to the final pour, every cup we brew is crafted with passion and precision. Sourced from the finest coffee farms and roasted to perfection, our blends deliver rich aromas, bold flavors, and a smooth finish that awakens your senses. Whether you’re starting your morning or slowing down your evening, this is coffee made to be savored.</p>
                </div>
                <div className="Buttons">
                    <button>Order Now</button>
                    <button>Discover Our Blends</button>
                </div>
            </div>
            <div className='Topmenu'>
                <h2>Features</h2>
                <div className="AllFavourites">
                    <div className="Favourites">
                        <img src={LogoImage} alt="" />
                        <h3>Espresso</h3>
                        <p>A strong and concentrated coffee made by forcing hot water through finely ground coffee beans. It has a rich flavor and forms the base for many other coffee drinks.</p>
                    </div>
                    <div className="Favourites">
                        <img src={LogoImage} alt="" />
                        <h3>Latee</h3>
                        <p>Made with one shot of espresso and a large amount of steamed milk, topped with a light milk foam. It’s smooth, creamy, and mild in taste.</p>
                    </div>
                    <div className="Favourites">
                        <img src={LogoImage} alt="" />
                        <h3>Cappuccino</h3>
                        <p>A balanced coffee made with equal parts espresso, steamed milk, and milk foam. It has a bold flavor with a light, airy texture on top.</p>
                    </div>
                    <div className="Favourites">
                        <img src={LogoImage} alt="" />
                        <h3>Cold Brew</h3>
                        <p>Coffee brewed using cold water over a long period (12–24 hours). It’s less acidic, smoother, and served chilled—perfect for hot weather.</p>
                    </div>
                </div>
            </div>
            <div className="Fourthsection">
                <div className="Fourthsecpartone">
                    <img src="" alt="" />
                    <h4>Oak & Roast</h4>
                    <h1>Morning Happy</h1>
                    <p>Start your day with fresh brewed happiness and smooth flavors. Savor our handcrafted coffee made from premium beans, crafted to energize your mornings.</p>
                    <button>Book a Table</button>
                    <button className="Fouthlastbutton">Order Now</button>
                </div>
                <div className="Fourthsecparttwo">
                    <h1>Vist Us Today</h1>
                    <div className="coffee-cards">
                        <div className="coffee-card">
                            <img src={ImgOne} alt="" />
                            <h3>Creamy Art Coffee</h3>
                            <p>Smooth & creamy</p>
                            <span>⭐ 4.8</span>
                        </div>
                        <div className="coffee-card">
                            <img src={ImgTwo} alt="" />
                            <h3>Creative Latte Art</h3>
                            <p>Creamy & sweet</p>
                            <span>⭐ 5.0</span>
                        </div>
                        <div className="coffee-card">
                            <img src={ImgThird} alt="" />
                            <h3>Coffee & Morning Brew</h3>
                            <p>Rich & aromatic</p>
                            <span>⭐ 4.6</span>
                        </div>
                        <div className="coffee-card">
                            <img src={ImgFourth} alt="" />
                            <h3>Premium Dark Roast</h3>
                            <p>Bold & strong</p>
                            <span>⭐ 5.0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Fifthsection">
                <img src={Fifthsectionimg} alt="" />
                <div className="Fifthsectiontext">
                    <h2>Warm Your Soul</h2>
                    <p>Indulge in rich, handcrafted coffee made from the finest beans.
                        Every sip delivers comfort, aroma, and pure satisfaction.</p>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="Sixthsection">
                <div className="CustomerReveiws">
                    <div className="CustomerReviewimg">
                        <img src={Firthreview} alt="" />
                    </div>
                    <div className="CustomerReviewtext">
                        <h4>Odis Ben Retha</h4>
                        <p>“Smooth coffee flavor with a rich aroma.
                            Best place to relax and enjoy premium brews.”</p>
                    </div>
                </div>
                <div className="CustomerReveiws">
                    <div className="CustomerReviewimg">
                        <img src={Secondreview} alt="" />
                    </div>
                    <div className="CustomerReviewtext">
                        <h4>Koffinger Creston</h4>
                        <p>“Excellent taste and beautiful presentation.
                            The latte art is absolutely stunning.”</p>
                    </div>
                </div>
                <div className="CustomerReveiws">
                    <div className="CustomerReviewimg">
                        <img src={Thirdreview} alt="" />
                    </div>
                    <div className="CustomerReviewtext">
                        <h4>Sood D Café</h4>
                        <p>“Perfect blend of freshness and quality.
                            Highly recommended for coffee lovers.”</p>
                    </div>
                </div>
            </div>
            <div className="Footerbar">
                <div>
                    <h3>Oak & Roast</h3>
                    <h4>Crafting rich flavors from the finest beans.</h4>
                </div>
                <div className="Footbaricons">
                    <span><FaInstagram /></span>
                    <span><FaFacebook /></span>
                    <span><FaYoutube /></span>
                </div>
                <div className="Footbarbutton">
                    <button>Explore Menu</button>
                    <button className="Footbarsecbutton">Order Now</button>
                </div>
            </div>
        </>
    )
}

