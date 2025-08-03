import React from 'react'
import './Footer.css'
import twitterIcon from '@/assets/logo-twitter 2.png'
import facebookIcon from '@/assets/fb.png'
import instagramIcon from '@/assets/Insta.png'
import githubIcon from '@/assets/Git.png'
import visaIcon from '@/assets/visa.png'
import mastercardIcon from '@/assets/Mastercard.png'
import paypalIcon from '@/assets/Paypal.png'
import applePayIcon from '@/assets/A Pay.png'
import googlePayIcon from '@/assets/G Pay.png'

const Footer = () => (
  <footer className="footer-light">
    <div className="footer-main">
      <div className="footer-brand-col">
        <div className="footer-brand">SHOP.CO</div>
        <div className="footer-desc">
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </div>
        <div className="footer-socials">
          <a href="#" className="footer-social-btn"><img src={twitterIcon} alt="Twitter" width={20} height={20} /></a>
          <a href="#" className="footer-social-btn"><img src={facebookIcon} alt="Facebook" width={20} height={20} /></a>
          <a href="#" className="footer-social-btn"><img src={instagramIcon} alt="Instagram" width={20} height={20} /></a>
          <a href="#" className="footer-social-btn"><img src={githubIcon} alt="Github" width={20} height={20} /></a>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <div className="footer-link-title">COMPANY</div>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>
        <div>
          <div className="footer-link-title">HELP</div>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div>
          <div className="footer-link-title">FAQ</div>
          <a href="#">Account</a>
          <a href="#">Manage Deliveries</a>
          <a href="#">Orders</a>
          <a href="#">Payments</a>
        </div>
        <div>
          <div className="footer-link-title">RESOURCES</div>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
      </div>
    </div>
    <hr className="footer-hr" />
    <div className="footer-bottom">
      <span>Shop.co © 2000-2025, All Rights Reserved</span>
      <div className="footer-payments">
        <img src={visaIcon} alt="Visa" />
        <img src={mastercardIcon} alt="Mastercard" />
        <img src={paypalIcon} alt="Paypal" />
        <img src={applePayIcon} alt="Apple Pay" />
        <img src={googlePayIcon} alt="Google Pay" />
      </div>
    </div>
  </footer>
)

export default Footer 