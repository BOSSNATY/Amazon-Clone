import React, { useContext, useState } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./payment.module.css";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  // console.log(user);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // console.log(paymentIntent);
      setProcessing(false);
      navigate("/orders", { state: { msg: "You have placed new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <section style={{ marginTop: "110px" }}>
        <div className={classes.payment__header}>
          Checkout ({totalItem}) items
        </div>

        <section className={classes.payment}>
          <div className={classes.flex}>
            <h3>Delivery Address</h3>
            <div>
              <div>{user?.email}</div>
              <div>123 React Lane</div>
              <div>Chicago, IL</div>
            </div>
          </div>
          <hr />

          <div className={classes.flex}>
            <h3>Review items and deliver</h3>
            <div>
              {basket?.map((item) => (
                <ProductCard product={item} flex={true} />
              ))}
            </div>
          </div>
          <hr />

          <div className={classes.flex}>
            <h3>Payment Method</h3>
            <div className={classes.payment__card__container}>
              <div className={classes.payment__details}>
                <form onSubmit={handlePayment}>
                  {cardError && (
                    <small style={{ color: "red" }}>{cardError}</small>
                  )}
                  <CardElement onChange={handleChange} />
                  {/* price */}
                  <div className={classes.payment__price}>
                    <div>
                      <span style={{ display: "flex", gap: "10px" }}>
                        <p>Total Order |</p>
                        <CurrencyFormat amount={total} />
                      </span>
                    </div>
                    <button type="submit">
                      {processing ? (
                        <div className={classes.loading}>
                          <ClipLoader color="gray" size={12} />
                          <p style={{ paddingTop: "20px" }}>Please Wait ...</p>
                        </div>
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default Payment;
