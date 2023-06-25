import React from 'react'

export default function ProductList({products,addtocart}) {
  return (
   <>
   {
    products.map((productitems,productindex)=>{
        return(
            <>
            <div className='products_container'>
            <img className='product_image' src={productitems.url} alt="product_items" />
            <h2 className='product_name'>{productitems.name}</h2>
            <h2 className='product_price'> Rs. {productitems.price}</h2>
            <button className='addtocart_btn' onClick={()=>addtocart(productitems)}>Add to cart</button>
            </div>
            </>
        )
    })
   }
   </>
  )
}
