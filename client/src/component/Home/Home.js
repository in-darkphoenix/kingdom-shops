import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="kingdomShops" />

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
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
