import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav_wrapper">
      <Link to="/" className="clearLinkBorder ">
        <h3 className="navProgressiveAttribute">☰All</h3>
      </Link>
      <Link to="/" className="clearLinkBorder ">
        <h3 className=" navProgressiveAttribute">Today's Deals</h3>
      </Link>
      <Link to="/" className="clearLinkBorder ">
        <h3 className="navProgressiveAttribute">Registry</h3>
      </Link>
      <Link to="/" className="clearLinkBorder ">
        <h3 className="navProgressiveAttribute"> Customer Service</h3>
      </Link>
      <Link to="/" className="clearLinkBorder ">
        <h3 className="navProgressiveAttribute">Gift Card</h3>
      </Link>
      <Link to="/" className="clearLinkBorder ">
        <h3 className="navProgressiveAttribute">Sell</h3>
      </Link>
    </nav>
  );
};

export default Nav;
