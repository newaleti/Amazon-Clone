import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import "./Banner.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import shopHoliday from "../Resources/Images/home__shopHoliday.jpg";
import beauty from "../Resources/Images/home__beauty.jpg";
import books from "../Resources/Images/home__books.jpg";
import gamers from '../Resources/Images/home__gammers.jpg';
import toys from '../Resources/Images/home__toy.jpg'


function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <div className="home_container">
            <Link to="/">
              <img
                className="spirality home_image"
                src={shopHoliday}
                alt="Amazom_Image"
              />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_container">
            <Link to="/">
              <img
                className="spirality home_image"
                src={beauty}
                alt="Amazom_Image"
              />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_container">
            <Link to="/">
              <img
                className="spirality home_image"
                src={books}
                alt="Amazom_Image"
              />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_container">
            <Link to="/">
              <img
                className="spirality home_image"
                src={gamers}
                alt="Amazom_Image"
              />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home_container">
            <Link to="/">
              <img
                className="spirality home_image"
                src={toys}
                alt="Amazom_Image"
              />
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner
