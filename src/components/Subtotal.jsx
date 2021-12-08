import React from "react";
import CurrencyFormat from "react-currency-format";
import "./css/Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalText={2}
        // value={getBasketTotal(basket)}
        value="0"
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal_button">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
