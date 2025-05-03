import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`} className={classes.categoryLink}>
        <span>{data.title}</span>
        <img src={data.imgLink} className={classes.categoryImg} alt="" />
        <p className={classes.shopLink}>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
