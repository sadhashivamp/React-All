import React from "react";
import "./ImageSlider.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


export default function ImageSlider() {
  return (
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg" alt=""/>
      <img src="https://www.pbctoday.co.uk/news/wp-content/uploads/2019/05/S-Radley-%C2%A9-Andrey-Popov-.jpg" alt=""/>
      <img src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2018/11/78.jpg?fit=935%2C546&ssl=1" alt=""/>
      <img src="https://itrade.gov.il/india/files/2019/09/shutterstock_158663105.jpg" alt=""/>
    </AliceCarousel>
    </div>
  );
}