import React, { useEffect, useState } from 'react'

export default function CartList({cart}) {

    const [CART,SETCART]=useState([])

    useEffect(()=>{
        SETCART(cart)
    },[cart])
  return (
<>
{
    CART?.map((cartitem,cartindex)=>{
        return(
            <>
            <div className='cart_container'>
            <img className='cart_image' src={cartitem.url} alt="cart_image" />
            <h2 className='cart_product_name'>{cartitem.name}</h2>
            <h2 className='cart_product_price'>Rs. {cartitem.price * cartitem.quantity}</h2>
            <button className='decrement_btn' onClick={()=>{
                const decrement=CART.map((item,index)=>{
                    return cartindex===index ? {...item, quantity:item.quantity > 0 ? item.quantity-1:0}:item
                })
                SETCART(decrement)
            }}>-</button>
            <h2 className='cart_product_qty'>Qty. {cartitem.quantity}</h2>
            <button className='increment_btn' onClick={()=>{
                const increment=CART.map((item,index)=>{
                    return cartindex===index ? {...item, quantity:item.quantity+1}:item
                })
                SETCART(increment)
            }}>+</button>
            </div>
            </>
        )
    })
}


    <div className="total_amt">Total amt.
        {
    CART.map(item=>item.price * item.quantity).reduce((total,value)=>total+value, 0)
        }
    </div>

</>
  )
}
