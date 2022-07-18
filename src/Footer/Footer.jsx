import React from 'react'
import './Footer.scss';
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
  <footer>
    <div className="footer-container">
        <div className="footer-topic">
            <h4>Perez Foods</h4>
            <p>Nothing brings people together like food</p>
        </div>

        <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Sign up for our newsletter & promotions </p>
           
            <div className="mailInputContainer">
      <input type="text" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
        </div>

           <div className="footer-reserve">
            <span>&copy; {new Date().getFullYear()} all rights and reserved Perez Foods</span>
            <div className="footer-icons">
                <span><FaFacebookF/></span>
                <span><FaInstagram/></span>
                <span><FaTwitter/></span>
            </div>
           </div>

        </div>

  </footer>
  )
}

export default Footer