import React from "react";
import "./Home.css";
import Product from "../Products/Product";
import Banner from "../Banner/Banner";
import BestSellersBooks from "../BestSellerBook/BestSellerBook";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Banner />
      </div>
      <div className="home__row">
        <Product
          id="12321341234"
          title="Ontel Star Belly Dream Lites, Stuffed Animal Night Light, Magical Pink and Purple Unicorn - Projects Glowing Stars & Shapes in 6 Gentle Colors, As Seen on TV"
          price={22.31}
          rating={4}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xCJfeMhWL._AC_UL320_.jpg"
        />
        <Product
          id="49538094"
          title="Dazzlingrock Collection Kate Middleton Diana Inspired 10K Round Diamond & Oval Blue Sapphire Pendant, White Gold"
          price={184.99}
          rating={3}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PCt4EgHIL._AC_UL320_.jpg"
        />
        <Product
          id="4903850"
          title="Cuisinart WAF-F40 Double Flip Belgian Waffle Maker Black/Stainless Bundle with 1 YR CPS Enhanced Protection Pack"
          price={149.95}
          rating={2}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CvYELLXQL._AC_UL320_.jpg"
        />
        <Product
          id="23445930"
          title="COVERGIRL Lash Blast Clean Volume Mascara, Black, 1 Count"
          price={9.99}
          rating={4}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71IwjANfH4L._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="HyperX Cloud Alpha - Gaming Headset, Dual Chamber Drivers, Legendary Comfort, Aluminum Frame, Detachable Microphone, Works on PC, PS4, PS5, Xbox One/ Series X|S, Nintendo Switch and Mobile – Red"
          price={84.63}
          rating={4}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61i+QbshAFL._AC_UY218_.jpg"
        />
        <Product
          id="23445930"
          title="LARNMERN Steel Toe Shoes for Men Air Cushion Slip Resistant Safety Work Sneakers Comfortable Breathable Stylish Construction Shoe"
          price={48.59}
          rating={3}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81yzXiyDpKL._AC_SY500_.jpg"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <BestSellersBooks />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="SAMSUNG 34” ViewFinity CJ79 Series Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Thunderbolt 3 Daisy Chain, "
          price={268.61}
          rating={4}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81oADRhNq2L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
