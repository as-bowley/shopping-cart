import React from "react";
import "./styles/Store.css";
import StoreItem from "./StoreItem";

const Store = (props) => {
  const mappedStock = props.stock.map((item) => {
    return (
      <StoreItem
        name={item.name}
        desc={item.desc}
        price={item.price}
        quantity={item.quantity}
        img={item.img}
        key={item.id}
        id={item.id}
        addToCart={props.addToCart}
      />
    );
  });

  return (
    <div className="">
      <h1 className="store--title">Store</h1>
      <div className="store">{mappedStock}</div>
    </div>
  );
};

export default Store;
