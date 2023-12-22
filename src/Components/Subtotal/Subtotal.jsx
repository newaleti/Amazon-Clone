import React from "react";
import "./Subtotal.css";
import numeral from "numeral";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom";

const CurrencyFormat = ({ value }) => {
  const [{ basket }, dispatch] = useStateValue();
  
  const navigate = useNavigate();

  const formattedValue = numeral(value).format("$0,0.00");

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formattedValue}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div>
      <CurrencyFormat value={getBasketTotal(basket)} />
    </div>
  );
}

export default Subtotal;





