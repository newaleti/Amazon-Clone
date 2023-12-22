import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // User is signed in
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // User is signed out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });

      return () => {
        // Unsubscribe when the component unmounts
        unsubscribe();
      };
    }, [dispatch]);

    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      } else {
        navigate("/login");
      }
    };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://freelogopng.com/images/all_img/1688364329amazon-logo-png-white.png"
          alt=""
        />
      </Link>
      <div className="header_option">
        <span className="header_optionLineOne">Deliver to</span>
        <div className="d-flex">
          <LocationOnOutlinedIcon className="text-white" />
          <span className="header_optionLinetwo">Ethiopia</span>
        </div>
      </div>
      <select
        className="modal-dialog-centered header_optionChocice"
        style={{ display: "block", top: "2.5px", backgroundColor: "#dadada" }}
      >
        <option value="selected">All</option>
        <option value="#">All Departments</option>
        <option value="#">Arts &amp; Crafts</option>
        <option value="#">Automotive</option>
        <option value="#">Baby</option>
        <option value="#">Beauty &amp; Personal Care</option>
        <option value="#">Books</option>
        <option value="#">Boys' Fashion</option>
        <option value="#">Computers</option>
        <option value="#">Deals</option>
        <option value="#">Digital Music</option>
        <option value="#">Electronics</option>
        <option value="#">Girls' Fashion</option>
        <option value="#">Health &amp; Household</option>
        <option value="#">Home &amp; Kitchen</option>
        <option value="#">Industrial &amp; Scientific</option>
        <option value="#">Kindle Store</option>
        <option value="#">Luggage</option>
        <option value="#">Men's Fashion</option>
        <option value="#">Movies &amp; TV</option>
        <option value="#">Music, CDs &amp; Vinyl</option>
        <option value="#">Pet Supplies</option>
        <option value="#">Prime Video</option>
        <option value="#">Software</option>
        <option value="#">Sports &amp; Outdoors</option>
        <option value="#">Tools &amp; Home Improvement</option>
        <option value="#">Toys &amp; Games</option>
        <option value="#">Video Games</option>
        <option value="#">Women's Fashion</option>
      </select>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {!user ? "Sign In" : "Sign Out"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
