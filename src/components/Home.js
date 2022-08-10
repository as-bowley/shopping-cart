import React from "react";
import { Link } from "react-router-dom";
import heropic from "./images/home--picture.jpg";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home--hero">
      <div className="hero--hero__left">
        <h2>Buy the best footballers in the world, right here!</h2>
        <Link to="/store">
          <button className="home--hero--button">See players!</button>
        </Link>
      </div>
      <div className="hero--hero__right">
        <img src={heropic} alt="Football stadium with fans." />
      </div>
    </div>
  );
};

export default Home;
