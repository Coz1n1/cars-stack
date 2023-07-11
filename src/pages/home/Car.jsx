import React from 'react'

export const CarModel = (props) => {

    const {id, name, price, image} = props.data;

  return (
    <div className='car-container'>
        <div className='car-name'>{name}</div>
        <div className='car-image'><img src={image} alt=""/></div>
    </div>
  )
}
