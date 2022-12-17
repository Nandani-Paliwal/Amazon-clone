import React from "react";

function Product({ tittle, image, price, rating }) {
  return (
    <div className="Product flex flex-col items-center justify-end m-2 p-5 w-full max-h-97 bg-white z-1 ">
      <div className="product_info h-24 mb-4">
        <p>
          {tittle}
        </p>
        <p className="product_price mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating flex ">
          {Array(rating).fill().map((_, i) => (
             <p>🌟</p>
          ))}

          
        </div>
      </div>

      <img
        className="img w-full max-h-52 object-contain mb-4"
        src={image}
        alt=""
      />

      <button className="addToBasketButton bg-addtobasket mt-2  border border-solid border-bordercolor">Add to Basket</button>
    </div>
  );
}

export default Product;
