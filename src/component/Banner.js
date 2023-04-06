import React from "react";
import Slider from "react-slick";
import ImageFirst from "../assets/images/banner-1.jpg";
import ImageSecond from "../assets/images/banner-2.jpg";

const Banner = ({ slug }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="banner_slider">
        {slug === "" ? (
          <>
            <Slider {...settings}>
              <div className="slider_block">
                <img src={ImageFirst} alt="image-one" />
                <div className="overlay"></div>
              </div>
              <div className="slider_block">
                <img src={ImageSecond} alt="image-two" />
                <div className="overlay"></div>
              </div>
            </Slider>
          </>
        ) : (
          <>
            <div className="slider_block">
              <img src={ImageFirst} alt="image-one" />
              <div className="banner_text">
                <h1>{slug}</h1>
                <div className="banner_btn_group">
                  <button className="home_btn">Home</button>
                  <button className="slug_btn">{slug}</button>
                </div>
              </div>
              <div className="bannerOverlay"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Banner;
