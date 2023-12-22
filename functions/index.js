const functions = require("firebase-functions");

const express = require("express");
const app = express();
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51OOvkBHSBuB2vnBwSaIUEWTExJ1BVGlJonQOiBflfrwXoKKJBDsYb4WXUTnhf861hs6ELaHB5hXCK6znA98vzb9M00tGquGprZ"
);

app.use(express.json());
app.use(cors({ origin: true}));
app.get("/", (req, res) => {
  res.status(200).send("Hello from server");
});

app.post("/payments/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total, 10);
    console.log("Payment Request Received for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: total,
    //   automatic_payment_methods: { enabled: true },
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error processing payment:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

exports.api = functions.https.onRequest(app);
