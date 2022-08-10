import React from "react";
import "./styles/Cart.css";

import CartItem from "./CartItem";

const Cart = ({ cart, addQuantity, subtractQuantity }) => {
  return (
    <div className="cart--modal">
      <h2>Cart</h2>
      <div className="cart--modal__items">
        <h4>Items</h4>
        {cart &&
          cart.map((item) => {
            return (
              <CartItem
                name={item.name}
                price={item.price * item.quantity}
                quantity={item.quantity}
                img={item.img}
                key={item.id}
                addQuantity={addQuantity}
                subtractQuantity={subtractQuantity}
                id={item.id}
              />
            );
          })}
      </div>
      <h3>
        Total:€{" "}
        {cart.length > 0
          ? cart.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)
          : 0}
      </h3>
      <button className="cart--modal__checkout">Checkout</button>
    </div>
  );
};

export default Cart;
