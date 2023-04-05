import React from "react";
import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="slider_block">
            <h3>1</h3>
          </div>
          <div className="slider_block">
            <h3>2</h3>
          </div>
          <div className="slider_block">
            <h3>3</h3>
          </div>
          <div className="slider_block">
            <h3>4</h3>
          </div>
          <div className="slider_block">
            <h3>5</h3>
          </div>
          <div className="slider_block">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
