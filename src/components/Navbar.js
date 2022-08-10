import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import cart from "./images/shopping-cart.png";

const Navbar = ({ showCart, cartItemAmount }) => {
  const cartAmount = cartItemAmount();
  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1>Footballers Store</h1>
      </div>

      <div className="navbar__links">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/store">Players</Link>
          <Link to="./about">About</Link>
          <button onClick={showCart}>
            <img src={cart} alt="shopping cart" width={"30px"} />
            <div className="navbar__links--notif">{cartAmount}</div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
