import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/product";
import ProductCard from "../../Components/Products/ProductCard";
function ProductDetail() {
  const [product, setProducts] = useState({});
  const { productId } = useParams();
  // console.log(productId);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  );
}

export default ProductDetail;
