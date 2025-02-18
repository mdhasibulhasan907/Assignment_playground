//import React from 'react'
 
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "../Styles/header.css"
import newsletterIcon from '../assets/newsletter-icon.png';

const Header= () => {
  return(
    <header>
      <div className="top-bar">
        <div className="newsletter">
        <img src={newsletterIcon} alt="Newsletter"/>
          <span>NEWSLETTER</span>
        </div>
        <nav className="nav-links">
          <a href="#">HOME</a>
          <a href="#">PAGES</a>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          
        </nav>
        <div className="search-social">
          <FiSearch className="search-icon" />
          <span>search</span>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaPinterest />
          </div>
        </div>
      </div>
     
    </header>
   
  )  
}

export default Header;