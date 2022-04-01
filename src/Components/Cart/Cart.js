import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";
const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={cart.img} alt="" />
      </div>
      <div>
        <h4>{cart.name}</h4>
        <p>Price: ${cart.price}</p>
        <p>Qty: {cart.quantity}</p>
      </div>
      <div>
      {/* <i class="fa-solid fa-trash"></i> */}
          <button onClick={() => removeFromCart(cart.id)}><FontAwesomeIcon icon={faTrash}/> </button>
      </div>
    </div>
  );
};

export default Cart;
