import React from "react";
import "./styles/App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Shop from './Shop';
import SingleProduct from './single-product';
import ProductList from "./product-list";
import ProductList2 from "./product-list2";
import Infs from "./infs";
import Footer from "./footer";
import logo from "../src/images/logo.png";
import user from "../src/images/user.png";
import search from "../src/images/search.png";
import like from "../src/images/like.png";
import shopping from "../src/images/shopping.png";
import banner1 from "../src/images/banner1.svg";
import bedroom from "../src/images/bedroom.svg";
import living from "../src/images/living.svg";
import dining from "../src/images/dining.svg";







const NavigationMenu = () => {
  return (
    <>
      <div className="navigation-menu">
        <div className="left-side">
          <h2 className="store-name"><img src={logo} alt="Logo" />Furniro</h2>
        </div>
        <div className="center">
          <ul className="menu-list">
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/shop" exact>Shop</NavLink></li>
            <li><NavLink to="/about" exact>About</NavLink></li>
            <li><NavLink to="/contact" exact>Contact</NavLink></li>
          </ul>
        </div>
        <div className="right-side">
          <img className="icon" src={user} alt="User" />
          <img className="icon" src={search} alt="Search" />
          <img className="icon" src={like} alt="Like" />
          <img className="icon" src={shopping} alt="Shopping" />
        </div>
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:category?" element={<Shop />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
      
    </>
  );
};
const HomePage = () => {   
  return (
      <div>
  
        <img src={banner1} alt="Banner" />
        <h3>Browse the range</h3>
        <div className="image-container">
          <div className="image-item">
            <Link to="/shop/Bedroom">
              <img src={bedroom} alt="Bedroom" />
            </Link>
            <p>Bedroom</p>
          </div>
          <div className="image-item">
            <Link to="/shop/Living">
              <img src={living} alt="Living" />
            </Link>
            <p>Living</p>
          </div>
          <div className="image-item">
            <Link to="/shop/Dining">
              <img src={dining} alt="Dining" />
            </Link>
            <p>Dining</p>
          </div>

        </div>
        <h3>Our Products</h3>
        <div className="container-sales">
          <ProductList />
          <ProductList2 />
          <div className="button-container">
            <Link to="/shop">
              <button className="botao">Show More</button>
            </Link>
          </div>
        </div>
        <Infs />
        <Footer />
      </div>
  );
  
};



  

export default NavigationMenu; 
  