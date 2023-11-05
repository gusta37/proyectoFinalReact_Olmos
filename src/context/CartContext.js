import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    cart:[],
    totalQuantity: 0,
    total: 0,
});

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)){
            setCart(prev=>[...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const removedItem = cart.find((item) => item.id === itemId);
        if (removedItem) {
            setCart((prev) => prev.filter((prod) => prod.id !== itemId));
        }
    }

    const clearCart = ()=>{
        setCart([]);
    }

    const isInCart = (itemId)=>{
        return cart.some(prod => prod.id === itemId)
    }

    const calculateTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }

    useEffect(() => {
        let newTotal = 0;
        cart.forEach((item) => {
            newTotal += item.price * item.quantity;
        });
        setTotal(newTotal);
    }, [cart]);

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity: calculateTotalQuantity(), total}}>
        {children}
    </CartContext.Provider>
  )
}
