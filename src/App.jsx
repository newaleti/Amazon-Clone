import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/FooterTop/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
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
