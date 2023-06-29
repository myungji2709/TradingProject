import Carousel from "react-bootstrap/Carousel";
import banner1 from "./img/banner.jpg";
import "./Banner.css";
import React from "react";

function Banner() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
