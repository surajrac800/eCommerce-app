import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">eCommerce</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product +
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png"
              alt=""
            />
            <p className="name">Suraj</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
