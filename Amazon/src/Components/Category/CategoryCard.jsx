import React from "react";
import classes from "./category.module.css";
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="" className={classes.categoryLink}>
        <span>{data.title}</span>
        <img src={data.imgLink} className={classes.categoryImg} alt="" />
        <p className={classes.shopLink}>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
