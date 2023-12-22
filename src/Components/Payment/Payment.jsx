import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import { Link, useNavigate } from "react-router-dom";
// import CurrencyFormat from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "../CheckoutProduct/CheckoutProduct.css";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import numeral from "numeral";
import axios from "../../axios";
import { db,auth } from "../../firebase";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

    function Payment() {
      const [{ basket, user }, dispatch] = useStateValue();
      const getBasketTotal = (basket) => {
        return basket?.reduce((amount, item) => item.price + amount, 0);
      };
      const stripe = useStripe();
      const elements = useElements();

      const navigate = useNavigate();

      const [error, setError] = useState(null);
      const [disabled, setDisabled] = useState(true);

      const [succeeded, setSucceeded] = useState(false);
      const [processing, setProcessing] = useState("");

      const [clientSecret, setClientSecret] = useState(true);

      useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
          const response = await axios({
            method: "POST",
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
          });
          setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
      }, []);

      console.log("The secret is >>>", clientSecret);

      const formattedTotal = numeral(getBasketTotal(basket)).format("$0,0.00");

      const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })
          .then(async ({ paymentIntent }) => {
            console.log("Payment confirmation received", paymentIntent);

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            const user = auth.currentUser;

            // Reference the necessary collections and documents
            const usersCollection = collection(db, "users");
            const userDoc = doc(usersCollection, user?.uid);
            const ordersCollection = collection(userDoc, "orders");
            const paymentIntentDoc = doc(ordersCollection, paymentIntent.id);

            // Set the data in the document
            await setDoc(paymentIntentDoc, {
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

            dispatch({
              type: "EMPTY_BASKET",
            });

            navigate("/orders");
          });
      };
      const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
      };

      return (
        <div className="payment">
          <div className="payment__container">
            <h1>
              checkout(<Link to="/checkout">{basket.length} items</Link>)
            </h1>
            <div className="payment__section">
              <div className="payment__title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment__address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
              </div>
            </div>
            <div className="payment__section">
              <div className="payment__title">
                <h3>Review items and delivery</h3>
              </div>
              <div className="payment__items">
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
            <div className="payment__section">
              <div className="payment__title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className="payment__priceContainer">
                    <h3>Order Total: {formattedTotal}</h3>
                    <button disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Payment;
