import React from 'react'
import './Footer.css'
import { Clock, Envelope, FacebookLogo, InstagramLogo, Phone, TwitterLogo, X } from 'phosphor-react'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top-wrapper'>
        <div className='footer-left'>
          <div className='footer-wrapper'>
          <span className='footer-left-company'>CAR<span className='footer-left-company-blue'>Stack</span></span>
          <span className='footer-paragraph'>The best solutions with the best prices.</span>
          <span className='footer-element'><Envelope size={32} color="#080807" />carstack@gmail.com</span>
          <span className='footer-element'><Phone size={32} color="#080807" />777-777-777</span>
          </div>
        </div>
        <div className='footer-mid'>
          <span className='footer-header'>About us</span>
          <span className='footer-header'>Our headquarters</span>
          <span className='footer-header'>Private policy</span>
          <span className='footer-header'>Complaints</span>
          <span className='footer-header'>FAQ</span>
        </div>
        <div className='footer-right'>
          <span className='footer-header'>Working hours</span>
          <span className='footer-element'><Clock size={32} color="#080807" />Monday - Friday: 9am - 5pm</span>
          <span className='footer-element'><Clock size={32} color="#080807" />Saturday: 11am - 3pm</span>
          <span className='footer-element'><X size={32} color="#080807" />Sunday: Closed</span>
        </div>
        <div className='footer-right'>
          <span className='footer-header'>Subscribe</span>
          <span className='footer-paragraph'>Subscribe to receive notifications and the latest promotions.</span>
          <div>
          <input type="text" className='footer-input' placeholder='Enter your email...'/>
          <button className='footer-button'>Subscribe</button>
          </div>
        </div>
        </div>
        <div className='footer-bottom-wrapper'>
          <span className='footer-header'>Visit our social media</span>
          <div>
          <span className='footer-bottom-element'><TwitterLogo size={32} color="#080807" /></span>
          <span className='footer-bottom-element'><FacebookLogo size={32} color="#080807" /></span>
          <span className='footer-bottom-element'><InstagramLogo size={32} color="#080807" /></span>
          </div>
        </div>
    </div>
  )
}
