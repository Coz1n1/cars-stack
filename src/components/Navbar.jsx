import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Car, List, X } from 'phosphor-react'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleMobile = () => setActive(!active);

  return (
    <div className='navbar-container'>
        <div className='left'>
            <Car size={42} color="#080807" />
            <div className='left-wrapper'>
            <span className='left-car'>CAR</span>
            <span className='left-stack'>Stack</span>
            </div>
        </div>
        <div className={active ? 'mid active' : 'mid'}>
            <Link to='' className='navigation-element'>Home</Link>
            <Link to='' className='navigation-element'>Offer</Link>
            <Link to='' className='navigation-element'>Reservation</Link>
            <Link to='' className='navigation-element'>About</Link>
            <Link to='' className='navigation-element'>Contact</Link>
        </div>
        <div className='right'>
            <Link to='' className='sign-in-button'>Sign In</Link>
            <Link to='' className='register-button'>Register</Link>
        </div>
        <div className='mobile-nav-menu' onClick={handleMobile}>
              {
                active ? 
                  <X size={32} color="#080807" />
                :
                  <List size={32} color="#080807" />
              }
        </div>
    </div>
  )
}
