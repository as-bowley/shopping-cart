import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import stockArray from "./stock";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const [stock, setStock] = useState(stockArray);
  const [cart, setCart] = useState([]);
  const [isCartshown, setIsCartShown] = useState(false);

  const showCart = () => {
    setIsCartShown((prevState) => !prevState);
  };

  const addToCart = (id) => {
    const index = stock.findIndex((item) => item.id === id);

    if (cart.filter((item) => item.id === stock[index].id).length > 0) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      const itemToBeAdded = {
        name: stock[index].name,
        price: stock[index].price,
        quantity: 1,
        img: stock[index].img,
        id: stock[index].id,
      };
      setCart((prevCart) => [...prevCart, itemToBeAdded]);
    }
  };

  const addQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const subtractQuantity = (id) => {
    const index = cart.findIndex((item) => item.id === id);

    if (cart[index].quantity === 1)
      if (cart.length === 1) {
        setCart([]);
      } else {
        setCart((prevCart) => {
          return prevCart.filter((item) => {
            return item.id !== id;
          });
        });
      }
    else {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

  const cartAmount = () => {
    return cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };

  return (
    <div className="App">
      <Navbar showCart={showCart} cartItemAmount={cartAmount} />
      {isCartshown && (
        <Cart
          cart={cart}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
        />
      )}

      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/store"
          element={<Store stock={stock} addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
