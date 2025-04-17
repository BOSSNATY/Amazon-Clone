import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";
const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <AiOutlineMenu />
          <span>All</span>
        </li>
        <li className={classes.navItem}>Today's Deals</li>
        <li className={classes.navItem}>Customer Service</li>
        <li className={classes.navItem}>Registry</li>
        <li className={classes.navItem}>Gift Cards</li>
        <li className={classes.navItem}>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
