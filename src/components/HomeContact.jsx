import React, { useState } from 'react'
import './HomeContact.css'
import { ArrowFatDown } from 'phosphor-react'

export const HomeContact = () => {
    const [opened, setOpened] = useState(false)

    const isOpen = () => {
        if(opened === false) {
            setOpened(!opened)
        }else if(opened === true){
            setOpened(!opened)
        }
    }

  return (
    <div className={opened === true ? 'contact-form open' : 'contact-form'} >
      <div className='form-header' onClick={isOpen}>Contact us <ArrowFatDown size={32} color="white" className={opened === true ? 'opened' : 'closed'}/></div>
      <div className='form-content'>
        <input type='text' placeholder='Email...' className='home-contact-input'/>
        <input type='text' placeholder='Topic...' className='home-contact-input'/>
        <textarea placeholder='Email...' className='home-contact-textarea'/>
        <button className='home-contact-button'>Send</button>
      </div>
    </div>
  )
}
