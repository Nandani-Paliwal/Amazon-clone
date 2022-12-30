import React from "react";
import { IoBasket } from "react-icons/io5";
import CurrencyFormat from "react-currency-format-latest";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal flex flex-col justify-between w-80  h-32 p-5 m-2 bg-subtotal border border-solid border-subtotalborder rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of HW */}
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift flex items-center">
              <input type="checkbox" className="checkbox:mr-1" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />

      <button className="proceedToCheckoutButton bg-addtobasket rounded-sm w-full h-8 border border-solid mt-3 border-bordercolor text-darkgray">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
