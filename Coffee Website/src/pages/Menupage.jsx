import React from 'react'
import Menuhero from '../assets/Menupage.png'
import Firstitem from "../assets/coffeeitemone.png";
import Seconditem from "../assets/coffeeitemsecond.png";
import Thirditem from "../assets/coffeeitemthird.png";
import Background from "../assets/Background.png";
import SideDishOne from "../assets/sidedishone.png";
import SideDishTwo from "../assets/sidedishtwo.png";
import SideDishThird from "../assets/sidedishthree.png";

import "./Menupage.css"

export const Menupage = () => {
  return (
    <>
      <div className="MenuHero">
        <img src={Menuhero} alt="" />
        <div className="Menutext">
          <h1>DRINK MENU</h1>
          <p>Our drink menu offers a wide variety of expertly crafted coffees, prepared using premium beans and precise brewing techniques. Each beverage is thoughtfully made to deliver a smooth, rich, and satisfying experience with every sip.</p>
        </div>
      </div>
      <div className="Topselling">
        <h1>OUR TOP SELLING</h1>
        <div className="Topitem">
          <div className="Topthree">
            <img src={Firstitem} alt="" />
            <h5>ESPRESSO</h5>
            <p>
              A concentrated shot of finely ground coffee,
              intense, rich, and energizing with a velvety crema.
            </p>
          </div>
          <div className="Topthree">
            <img src={Seconditem} alt="" />
            <h5>LATTE</h5>
            <p>
              Smooth espresso blended with silky steamed milk,
              light, creamy, and comforting in every sip.
            </p>
          </div>
          <div className="Topthree">
            <img src={Thirditem} alt="" />
            <h5>CAPPUCCINO</h5>
            <p>
              A perfect balance of rich espresso,
              steamed milk, and smooth creamy foam.
            </p>
          </div>
        </div>
      </div>
      <div className="Thirdsecmenypage">
        <img src={Background} alt="" />
        <div className="Thirdsectext">
          <h1>Food Menu</h1>
          <p>Discover a carefully curated selection of freshly prepared dishes, crafted with quality ingredients and rich flavors. Each item is designed to complement our beverages and deliver a satisfying dining experience.</p>
        </div>
      </div>
      <div className="Sidedishs">
        <h1>OUR SIDEDISHES</h1>
        <div className="Topsidedish">
          <div className="sidedish">
            <img src={SideDishOne} alt="" />
            <h5>MILLE-FEUILLE</h5>
            <p>
              Delicate layers of crisp pastry and smooth cream, finished with a light glaze for a perfectly balanced, elegant dessert.
            </p>
          </div>
          <div className="sidedish">
            <img src={SideDishTwo} alt="" />
            <h5>CHOCOLATE CROISSANT</h5>
            <p>
              A flaky, buttery croissant drizzled with rich chocolate and topped with crunchy nuts, baked to golden perfection.
            </p>
          </div>
          <div className="sidedish">
            <img src={SideDishThird} alt="" />
            <h5>CHOCOLATE CHIP COOKIE</h5>
            <p>
              Freshly baked and golden brown, loaded with rich chocolate chunks for a soft, chewy, and indulgent bite.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

