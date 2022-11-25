import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='Product'>
      <div className="product_info">
        <p>The lean startup</p>
        <p className='product_price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className="product_rating">
            <p>🌟</p>
            <p>🌟</p>
            <p>🌟</p>
        </div>

        <img className='img w-full h-full'  src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81-QB7nDh4L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FLean-Startup-Entrepreneurs-Continuous-Innovation%2Fdp%2F0307887898&tbnid=S821FdAakem-KM&vet=12ahUKEwjrxM_-48j7AhXC0qACHTSIA1gQMygAegUIARC_AQ..i&docid=rTFwdcQdJS89dM&w=1688&h=2550&q=lean%20startup%20book&hl=en-GB&ved=2ahUKEwjrxM_-48j7AhXC0qACHTSIA1gQMygAegUIARC_AQ' alt='' />
      </div>
    </div>
  )
}

export default Product


