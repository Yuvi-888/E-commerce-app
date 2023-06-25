import React from 'react'
import cart_icon from '../images/cart_logo.png'


export default function Navbar({count,setshowcart}) {
    
  return (
    <>
    <navbar className="nav">
        <p className='app_heading' onClick={()=>setshowcart(false)}>MyGadgets</p>
        <img className='cart_icon' onClick={()=>setshowcart(true)} src={cart_icon} alt="cart_icon" /><sup className='cart_counter'>{count}</sup>
        
    </navbar>
    </>
  )
}
