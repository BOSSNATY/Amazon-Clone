import React from "react";
import { Link } from "react-router-dom";
import classes from "../Header/header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section className={classes.resetWrapper}>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
          </div>
          <div className={classes.delivery}>
            <span className={classes.headerText}>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span className={classes.headerText}>Ethiopia</span>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Products" />
            <span
              className={classes.headerText}
              style={{ overflowY: "hidden" }}
            >
              <BsSearch size={36} />
            </span>
          </div>
          <div className={classes.order__container}>
            <div>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>
            </div>
            <Link to="/auth">
              <div>
                <p>Sign in</p>
                <span className={classes.headerText}>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span className={classes.headerText}>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span className={classes.headerText}>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
