import React from "react";

const CartItem = ({
  name,
  price,
  quantity,
  img,
  addQuantity,
  subtractQuantity,
  id,
}) => {
  return (
    <div className="cart--modal__item">
      <div className="cart--modal__item__image">
        <img src={require(`${img}`)} alt="product" width={"120px"} />
      </div>
      <div>
        <h4>{name}</h4>
        <strong>€{price}</strong>
        <br></br>
        <br></br>
        <strong>Qty: {quantity}</strong>
        <br></br>
        <br></br>
        <button
          onClick={() => {
            addQuantity(id);
          }}
        >
          +
        </button>
        <button onClick={() => subtractQuantity(id)}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
