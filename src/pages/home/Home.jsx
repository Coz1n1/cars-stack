import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import './Home.css'
import { ArrowCircleDown, ArrowRight, Balloon, CalendarCheck, CalendarX, Car, CarSimple, CellSignalFull, CheckCircle, Cloud, Coins, HandPalm, MapPin, Phone} from 'phosphor-react'
import { Footer } from '../../components/Footer'
import { Testimonials } from '../../components/Testimonials'
import { faqs, CARS } from '../../data'
import { HomeContact } from '../../components/HomeContact'
import { CarModel } from './Car'

export const Home = () => {
  const [selected, setSelected] = useState(null)

  const visible = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>
    <Navbar/>
    <div className='home-wrapper'>
      <div className='svg-shape'>
      <svg height="1200" width="2000">
      <polygon points="-100,500 2000,90 2000,500" style={{fill: '#0099ff'}}/>
      </svg>
    </div>
      <div className='home-left'>
        <Cloud size={77} color="#080807" className='home-left-cloud1'/>
        <Cloud size={62} color="#080807" className='home-left-cloud2'/>
        <Cloud size={62} color="#080807" className='home-left-cloud3'/>
        <div className='left-header-content'>
        <span className='left-header'>Plan your trip and save <span className='left-header-blue'>big</span> with us</span>
        </div>

        <span className='home-left-p'>You will find the car of your dreams with us. Just choose a model and enjoy your journey with small price, unlimited distance and many more!</span>
        <div className='left-buttons'>
          <button className='home-rent-button'>Rent Now<CheckCircle size={23} color="white" weight="fill" className='button-icon'/></button>
          <button className='home-more-button'>Learn More<ArrowRight size={23} color="white" className='button-icon'/></button>
        </div>
      </div>
      <div className='home-right'>
        <img src={require('../../assets/main_car.png')} alt="" className='home-carpng'/>
      </div>
    </div>
    <div className='home-book-section'>
      <span className='book-title'>Book your car</span>
      <div className='home-book-wrapper'>
      <div className='book-element'>
      <label for="carSelect" className='book-label'><Car size={32} color="blue" className='book-icon'/>Choose your car:</label>
      <select name="cars" id="carSelect" className='book-input'>
      <option value="passat">Passat</option>
      <option value="2">2</option>
      <option value="3">Passat</option>
      <option value="4">Passat</option>
      </select>
      </div>
      <div className='book-element'>
      <label for="pickupDate" className='book-label'><CalendarCheck size={32} color="blue" className='book-icon'/>Pick-up data</label>
      <input id='pickupDate' type="date" value="dd/mm/yyyy" className='book-input'/>
      </div>
      <div className='book-element'>
      <label for="dropofDate" className='book-label'><CalendarX size={32} color="blue" className='book-icon'/>Drop-of data</label>
      <input id='dropofDate' type="date" value="dd/mm/yyyy" className='book-input'/>
      </div>
      </div>
      <div className='home-book-wrapper'>
      <div className='book-element'>
      <label for="pickupLocationSelect" className='book-label'><MapPin size={32} color="blue" className='book-icon'/>Pick-up location:</label>
      <select name="cities" id="pickupLocationSelect" className='book-input'>
      <option value="Cracow">Cracow</option>
      <option value="Warsaw">Warsaw</option>
      <option value="Wroclaw">Wroclaw</option>
      </select>
      </div>
      <div className='book-element'>
      <label for="dropofLocationSelect" className='book-label'><MapPin size={32} color="blue" className='book-icon'/>Drop-of location:</label>
      <select name="dropof-cities" id="dropofLocationSelect" className='book-input'>
      <option value="Cracow">Cracow</option>
      <option value="Warsaw">Warsaw</option>
      <option value="Wroclaw">Wroclaw</option>
      </select>
      </div>
      <div className='book-search'>
      <button className='book-search-button'>Search</button>
      </div>
      </div>
    </div>
    <div className='cars-display'>
        {CARS.map((item, i)=>(
          <CarModel data={item} key={i}/>
        ))}
    </div>
    <div className='rental-description'>
      <div className='rental-description-header'>
        <span className='rental-description-header-content'>Quick & <span className='blue'>Easy</span> Rental</span>
        <span className='rental-description-header-paragraph'>Plan your trip with us</span>
      </div>
      <div className='rental-steps'>
        <div className='rental-steps-step'>
          <CarSimple size={70} color="blue"/>
          <span className='rental-steps-step-header'>Select car</span>
          <span className='rental-steps-step-description'>Choose your car from our wide offer, select pick-up drop-of location and enjoy!</span>
        </div>
        <div className='rental-steps-step'>
          <Phone size={70} color="blue"/>
          <span className='rental-steps-step-header'>Contact Us</span>
          <span className='rental-steps-step-description'>We will contact you via email or by one of our operators to talk about possible bonus services. After that you will choose the payment method.</span>
        </div>
        <div className='rental-steps-step'>
          <Balloon size={70} color="blue"/>
          <span className='rental-steps-step-header'>Enjoy!</span>
          <span className='rental-steps-step-description'>Relax and travel wherever you want with anyone you want!</span>
        </div>
      </div>
    </div>
    <div className='application-reminder'>
      <img src={require('../../assets/apps_buttons.png')} alt="" className='application-reminder-png'/>
      <div className='application-reminder-wrapper'>
      <span>Check out our mobile application</span>
      <span className='application-reminder-description'>If you like spontaneous trips download our newest application on Google Play or Apple Store to rent cars faster wherever you are and enjoy your time with us!</span>
      </div>
    </div>
    <div className='office-description'>
      <div className='office-description-wrapper'>
        <div className='office-description-image-content'>
      <img src={require('../../assets/home_cars.png')} alt="" className='office-description-image'/>
      </div>
      <div className='office-description-sides-wrapper'>
      <div className='office-description-left'>
        <span className='office-description-left-header'>Why choose Us?</span>
        <span className='office-description-left-headerbig'>The best offer in the industry</span>
        <span className='office-description-left-paragraph'>Our company offers wide range of cars with small prices which will definetely fit in your preferences.</span>
        <button className='office-description-button'>Check Details<ArrowRight size={23} color="white" className='button-icon'/></button>
      </div>
      <div className='office-description-right'>
        <div className='office-description-right-element'>
          <Coins size={90} color="blue" />
          <div>
          <h3>Only attractive offers</h3>
          <span className='office-description-paragraph'>We have the most attractive price offer for each rental length of all available companies.</span>
          </div>
        </div>
        <div className='office-description-right-element'>
          <HandPalm size={90} color="blue" />
          <div>
          <h3>Stop to micropayments</h3>
          <span className='office-description-paragraph'>We do not charge any additional payments for the rental of our cars.</span>
          </div>
        </div>
        <div className='office-description-right-element'>
          <CellSignalFull size={90} color="blue" />
          <div>
          <h3>Offer for travelers</h3>
          <span className='office-description-paragraph'>You can ride without restrictions for any distance during the rental period.</span>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    <Testimonials/>
    <div className='faq-container'>
    <div className='faq-header'>FAQs</div>
    {faqs.map((faq, i)=> (
      <div className='question-container'>
        <div className={selected === i ? 'question-content active' : 'question-content'} onClick={() => visible(i)}>
          {faq.question}
          <ArrowCircleDown size={32} className={selected === i ? 'rotate-down' : 'rotate-up'}/>
        </div>
        <div className={selected === i ? 'answer-content show' : 'answer-content'}>
          {faq.answer}
        </div>
      </div>
    ))}
    </div>
    <Footer/>
    <HomeContact/>
    </>
  )
}
