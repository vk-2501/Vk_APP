import React from "react";
import CurrencyFormat from "react-currency-format";
import "./css/Subtotal.css";

const Subtotal = ({ price, items }) => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({items} items): <strong>₹{price}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalText={2}
        value="0"
        displayType="text"
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="subtotal_button">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
