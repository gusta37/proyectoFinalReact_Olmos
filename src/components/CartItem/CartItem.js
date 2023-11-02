import React from 'react'
import './CartItem.css'

const CartItem = ({item, quantity, removeItem}) => {
  // console.log(item.img);
  return (
    <div className='cartItemContainer'>
        <img src={item.img} alt={item.name} className=''/>
        <h2 className='cartName'>{item.name}</h2>
        <p className='cartText'>P. U. ${item.price.toFixed(2)}</p>        
        <p className='cartText'>Cantidad: {quantity}</p>
        <button className="btn button mb-5 is-responsive is-primary is-outlined" onClick={()=>removeItem(item.id)}>X</button>
    </div>
  )
}

export default CartItem;