//import React from 'react'
import "../Styles/Footer.css"

import p1 from"../assets/visa.png"
import p2 from "../assets/mastercard.png"
import p3 from "../assets/amex.png"
import p4 from "../assets/paypal.png"
import p5 from "../assets/footer-logo-img-1.png"
import { FaTwitter, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About PlayGrow</a></li>
            <li><a href="#">Our Experts</a></li>
            <li><a href="#">Services & Prices</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CUSTOMERS</h3>
          <ul>
            <li><a href="#">Read Our Advice</a></li>
            <li><a href="#">Get In Touch</a></li>
            <li><a href="#">Online Store</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Ask Away</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SOCIAL MEDIA</h3>
          <ul className="social-icons-1">
            <li><a href="#"><FaTwitter /> Twitter</a></li>
            <li><a href="#"><FaInstagram /> Instagram</a></li>
            <li><a href="#"><FaFacebook /> Facebook</a></li>
            <li><a href="#"><FaPinterest /> Pinterest</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT</h3>
          <p>Monday to Friday 9 a.m. - 5 p.m.</p>
          <p>📝 012 34 567 8912</p>
          <p>📝 123 45 678 9123</p>
          <p><a href="mailto:playgrow@oodeinteractive.com">playgrow@oodeinteractive.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        
        <div className="footer-bottom-container">
        {/* <div className="footer-logo-img-bottom">
        <img src={p5} alt="footer-logo-img-1" />
        </div> */}
        <img src={p5} className="footer-logo-img-bottom" alt="footer-logo-img-1" />
          <p>© 2023 Qade Interactive, All Rights Reserved</p>
          <div className="payment-icons">
            <img src={p1} alt="Visa" />
            <img src={p2} alt="Mastercard" />
            <img src={p3} alt="Amex" />
            <img src={p4} alt="PayPal" />
          </div>
          {/* <a href="#" className="top-link">TOP</a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer