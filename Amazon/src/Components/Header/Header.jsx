import React from "react";
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
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
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
            <span className={classes.headerText}>
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
            <a href="">
              <div>
                <p>Sign in</p>
                <span className={classes.headerText}>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <p>returns</p>
              <span className={classes.headerText}>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span className={classes.headerText}>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
