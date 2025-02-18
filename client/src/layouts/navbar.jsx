//import React from 'react'
//import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import "../Styles/navbar.css"
import newsIN from '../assets/NEW IN.png';
import aboutus from '../assets/About us.png';
import logo from '../assets/footer-logo-img-1.png';
import Wishlist from '../assets/Wishlist.png';
import cart from '../assets/cart.png';
const Navbar = () => {
  return (
    
    <navbar >
      <div className="navbar-container">
      <div className="newsletter">
        <img src={newsIN} alt="newsIN"/>
        <p>NEW IN</p>
        </div>

        <div className="newsletter">
        <img src={aboutus} alt="aboutus"/>
        <p>About Us</p>
        </div>

        <div className="logo">
        <img src={logo} alt="logo"/>
          
        </div>

        <div className="Wishlist">
        <img src={Wishlist} alt="Wishlist"/>
          <p>Wishlist</p>
        </div>

        <div className="cart">
        <img src={cart} alt="cart"/>
          <p>cart</p><span className="cart-amount">50.00</span>
        </div>


      </div>
      {/* <div className="navbar-left">
        <a href="#" className="navbar-brand">PLAYGROW</a>
        <span className="navbar-subtitle">BABY EQUIPMENT</span>
      </div>
      <div className="navbar-right">
        
        <a href="#" className="navbar-link">ABOUT US</a>
        <a href="#" className="navbar-link">
          <FaHeart /> WISHLIST
        </a>
        <a href="#" className="navbar-link">
          <FaShoppingCart /> CART <span className="cart-amount">50.00</span>
        </a>
      </div> */}
    </navbar>
   
  )
}

export default Navbar;