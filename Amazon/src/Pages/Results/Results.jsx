import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./results.module.css";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Products/ProductCard";
import { productUrl } from "../../Api/product";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
