import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product";

const product = {
  name: "Trident of Poseidon",
  images: [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Poseidon_Penteskouphia_Louvre_CA452.jpg/938px-Poseidon_Penteskouphia_Louvre_CA452.jpg",
    },
  ],
  price: "20 CC",
  _id: "xuni",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Kingdom Shops</p>
        <h1>Find Medievel Products here</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
