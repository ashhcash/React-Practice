import React from 'react'
import "./Item.css"
const Item2 = ({image, title}) => {
  return (
    <div className='item-container'>
        <img src= {image} alt = {title}/>
        <div className='item-title'>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Item2