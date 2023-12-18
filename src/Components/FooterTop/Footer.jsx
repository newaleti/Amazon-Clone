import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Resources/Images/Amazon-Logo-White.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="backTo">
        <Link to="#">Back to top</Link>
      </div>
      <div className="footer_top">
        <div className="footer_details_one">
          <h3>Get to Know US</h3>
          <Link to="">Careers</Link>
          <br />
          <Link to="">Blog</Link>
          <br />
          <Link to="">About Amazon</Link>
          <br />
          <Link to=""> Investor Relations</Link>
          <br />
          <Link to="">Amazon Devices</Link>
          <br />
          <Link to="">Amazon Science</Link>
          <br />
        </div>
        <div className="footer_details_one">
          <h3>Make money with Us</h3>
          <Link to=""> Sell Products on Amazon</Link>
          <br />
          <Link to="">Sell on Amazon Business</Link>
          <br />
          <Link to="">Sell apps on Amazon</Link>
          <br />
          <Link to="">Become an Affiliate</Link>
          <br />
          <Link to="">Advertise Your Products</Link>
          <br />
          <Link to="">Self-Publish with Us</Link>
          <br />
          <Link to="">Host an Amazon Hub</Link>
          <br />
          <Link to="">›See More Make Money with Us</Link>
        </div>
        <div className="footer_details_one forres">
          <h3>Amazon Payment Products</h3>
          <Link to="">Amazon Business Card</Link>
          <br />
          <Link to="">Shop with Points</Link>
          <br />
          <Link to="">Reload Your Balance</Link>
          <br />
          <Link to="">Amazon Currency Converter</Link>
          <br />
        </div>
        <div className="footer_details_one forres">
          <h3>Let Us Help You</h3>
          <Link to="">Amazon and COVID-19</Link>
          <br />
          <Link to="">Your Account</Link>
          <br />
          <Link to="">Your Orders</Link>
          <br />
          <Link to="">
            Shipping Rates &<br /> Policies
          </Link>
          <br />
          <Link to="">
            Returns &<br /> Replacements
          </Link>
          <br />
          <Link to="">Manage Your</Link>
          <br />
          <Link to="">Content and Devices</Link>
          <br />
          <Link to="">Amazon Assistant</Link>
          <br />
          <Link to="">Help</Link>
          <br />
        </div>
      </div>
      <Divider
        style={{
          width: "100%",

          marginTop: 50,
          borderColor: "#dddddd",
        }}
      />
      <div className="footer_middle">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="footer_div">English</div>
        <div className="footer_div">$USD -U.S. Dollar</div>
        <div className="footer_div">Unitrd states</div>
      </div>
      <div className="footer__bottom">
        <table>
          <th>Amazon Music </th>
          <th>Amazon Ads</th>
          <th>6pm</th>
          <th>AbeBooks</th>
          <th>ACX</th>
          <th>Sell on Amazon</th>
          <th>Amazon Business</th>
          <tr>
            <td>
              Stream millions <br />
              of songs
            </td>
            <td>
              Reach customers
              <br />
              wherever they
              <br />
              spend their time
            </td>
            <td>
              Score deals <br /> on fashion <br />
              brands
            </td>
            <td>
              Books, art & <br /> collectibles
            </td>
            <td>
              Audiobook Publishing <br />
              Made Easy
            </td>
            <td>
              Start a Selling <br /> Account
            </td>
            <td>
              Everything <br /> For <br />
              Your
              <br />
              Business
            </td>
          </tr>

          <th> AmazonGlobal</th>
          <th>Home Services</th>
          <th>
            Amazon Web <br /> Services
          </th>
          <th>Audible</th>
          <th>Box Office Mojo</th>
          <th>Goodreads</th>
          <th>IMDb</th>

          <tr>
            <td>
              Ship Orders
              <br /> Internationally
            </td>
            <td>
              Experienced Pros <br /> Happiness <br />
              Guarantee
            </td>
            <td>
              Scalable Cloud <br />
              Computing <br />
              Services
            </td>
            <td>
              Listen to Books & <br />
              Original <br /> Audio <br />
              Performances
            </td>
            <td>
              Find Movie
              <br /> Box Office Data
            </td>

            <td>
              Book reviews <br /> & <br />
              recommendations
            </td>

            <td>
              Movies, TV <br /> & Celebrities
            </td>
          </tr>

          <th>IMDbPro </th>
          <th>
            Kindle Direct <br /> Publishing
          </th>
          <th>
            Prime Video <br />
            Direct
          </th>
          <th>Shopbop</th>
          <th>Woot!</th>
          <th>Zappos </th>
          <th>Ring</th>

          <tr>
            <td>
              Get Info <br />
              Entertainment <br />
              Professionals
              <br />
              Need
            </td>

            <td>
              Indie Digital & <br />
              Print Publishing <br /> Made Easy.
            </td>

            <td>
              Video <br /> Distribution <br /> Made Easy.
            </td>

            <td>
              Designer <br />
              Fashion Brands
            </td>

            <td>
              Deals and <br />
              Shenanigans
            </td>
            <td>
              Shoes & <br />
              Clothing
            </td>
            <td>
              Smart Home <br /> Security <br />
              Systems
            </td>
          </tr>
          <th></th>
          <th> eero WiFi</th>
          <th> Blink</th>
          <th>Neighbors App</th>
          <th>
            Amazon Subscription <br /> Boxes
          </th>
          <th>PillPack</th>
          <tr>
            <td></td>
            <td>
              Stream 4K Video
              <br />
              in Every Room
            </td>

            <td>
              Smart Security for Every
              <br /> Home
            </td>

            <td>
              Real-Time Crime & <br /> Safety Alerts
            </td>

            <td>
              Top subscription boxes <br />– right to your door
            </td>
            <td>
              Pharmacy <br />
              Simplified
            </td>
          </tr>
        </table>

      </div>
      <p className="footer__last">
        Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
        &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year},
        Amazon.com, Inc. or its affiliates
      </p>
    </footer>
  );
};

export default Footer;





