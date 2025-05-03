import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  // console.log(rating);
  return (
    <div className={classes.card__container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating
            value={rating?.rate}
            precision={0.1}
            className={classes.ratingstar}
          ></Rating>
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
      </div>
      <button className={classes.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;
