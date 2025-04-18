import React from "react";
import classes from "./category.module.css";
import { categoryInfos } from "./categoryInfo";
import CategoryCard from "./CategoryCard";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((info) => {
        return <CategoryCard data={info} />;
      })}
    </section>
  );
}

export default Category;
