import React from 'react'
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <div className='testimonials-svg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="2000">
        <path fill="#0099ff" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,64C320,75,400,117,480,165.3C560,213,640,267,720,277.3C800,288,880,256,960,240C1040,224,1120,224,1200,213.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      </div>
      <div className='testimonials-content'>
      <span className='testimonials-header-small'>Read about us</span>
      <span className='testimonials-header'>Our quality is backed by customer feedback</span>
      <span className='testimonials-description'>
        We always care about good contact with our customers in order to constantly improve our services and become even better.
      </span>
      <div className='testimonials-examples'>
        <div className='testimonials-example'>
          <div className='testimonials-example-description'>
            <span>Very fast rental and nice service</span>
          </div>
          <div className='testimonials-example-images'>
            <img src={require('../assets/quotes.png')} alt="" className='testimonials-example-images-image'/>
            <span className='testimonials-nickname'>Brodo Faggins</span>
            <img src={require('../assets/ring.png')} alt="" className='testimonials-example-images-image'/>
          </div>
        </div>
        <div className='testimonials-example'>
          <div className='testimonials-example-description'>
            <span>Very attractive prices compared to other rental companies</span>
          </div>
          <div className='testimonials-example-images'>
            <img src={require('../assets/quotes.png')} alt="" className='testimonials-example-images-image'/>
            <span className='testimonials-nickname'>Gandalf</span>
            <img src={require('../assets/gandalf.png')} alt="" className='testimonials-example-images-image'/>
          </div>
        </div>
        <div className='testimonials-example'>
          <div className='testimonials-example-description'>
            <span>Good selection of cars and decent price</span>
          </div>
          <div className='testimonials-example-images'>
            <img src={require('../assets/quotes.png')} alt="" className='testimonials-example-images-image'/>
            <span className='testimonials-nickname'>Thomas</span>
            <img src={require('../assets/shelby.png')} alt="" className='testimonials-example-images-image'/>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
