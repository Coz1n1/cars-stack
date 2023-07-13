import { ArrowCircleDown } from 'phosphor-react';
import React, {useState} from 'react'

export const CarModel = (props) => {
  const [visible, setVisible] = useState(false)
  const {id, name, price, image, description, specification} = props.data;

  const handleClick = () => setVisible(!visible);

  return (
    <div className='car-container'>
        <div className='car-name'>{name}</div>
        <div className='car-image'>
          <img src={image} alt="" className='car-image-props'/>
        </div>
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
            <div className='car-specification'>
              <div className='car-spec-header'>Specification:</div>
              {specification.map((item)=>(
                <div className='car-spec-content'>
                  <div className='car-specification-item-h'>{item.header}</div>
                  <div className='car-specification-item'>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
