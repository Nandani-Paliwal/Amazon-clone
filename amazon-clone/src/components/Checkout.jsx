import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout flex p-5 max-h-full bg-white">
      <div className="checkout-left">
        <img
          className="checkout_add mb-3 w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_tittle mr-3 p-3 border-b border-gray-300 ">Your shopping Basket</h2>

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
