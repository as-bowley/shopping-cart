import React from "react";

const StoreItem = ({ name, desc, price, img, id, addToCart }) => {
  return (
    <div className="store--item" id={id}>
      <h3>{name}</h3>
      <img src={require(`${img}`)} alt="Store item" />
      <strong>€{price}</strong>
      <p>{desc}</p>
      <button onClick={() => addToCart(id)} className="store--item--add-button">
        Add to cart
      </button>
    </div>
  );
};

export default StoreItem;
