import { ArrowCircleDown } from 'phosphor-react';
import React, {useState} from 'react'

export const CarModel = (props) => {
  const [visible, setVisible] = useState(false)
  const {id, name, price, image, description} = props.data;

  const handleClick = () => {
    console.log(id)
    if(visible === false ){
      setVisible(!visible);
    } else if(visible === true){
      setVisible(!visible);
    }
  }

  return (
    <div className='car-container'>
        <div className='car-name'>{name}</div>
        <div className='car-image'><img src={image} alt=""/></div>
        <div className='car-price'>
          {price}$/day
          <div className='car-button-content'>
            <button className='car-book-button'>Book a car</button>
          </div>
        </div>
        <div className='car-more-wrapper'>
          <div className='car-more' onClick={handleClick}>
            More Info
            <ArrowCircleDown size={32} color="gray" className={visible === true ? 'rotate-down' : 'rotate-up'}/>
          </div>
          <div className={visible === true ? 'car-description show' : 'car-description'}>
            {description}
          </div>
        </div>
    </div>
  )
}
