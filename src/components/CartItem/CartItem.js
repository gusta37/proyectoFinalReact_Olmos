import React from 'react';
import './CartItem.css'

const CartItem = ({item, quantity, removeItem}) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(item.price);

  return (
    <div className='cartItemContainer'>
        <img src={item.img} alt={item.category} className='cartItemImg'/>
        <h2 className='cartName'>{item.name}</h2>               
        <p className='cartText'>Cantidad: {quantity}</p>
        <p className='cartText'>Precio Unitario {formattedPrice}</p> 
        <button className="btn button mb-5 is-responsive is-primary is-outlined" onClick={()=>removeItem(item.id)}>X</button>
    </div>
  )
}

export default CartItem;