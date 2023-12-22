import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Payment from "./Components/Payment/Payment";
import Footer from "./Components/FooterTop/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51OOvkBHSBuB2vnBwiHXEpjhCINdOVnx2BP8B1qZgzH1vZrMNObJGuiId8okIQxPmNQabcS2syDCnSHMNxOi6z2bI00LW9v6UOw"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Nav />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
