import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";
import img14 from "../assets/images/14.png";
import img15 from "../assets/images/15.png";
import img16 from "../assets/images/16.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";
import img19 from "../assets/images/19.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import img24 from "../assets/images/24.png";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { imgData } from "../data/data";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { ArrowLeftIcon } from "@heroicons/react/solid";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="hidden lg:block">
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          color: "black",
          height: "60px",
          width: "60px",
          marginRight: "100px",
          boxShadow: "1px 2px 5px 5px #f2f2f2",

          marginTop: "-40px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <div className=" mr-4">
          <ArrowRightIcon className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="hidden lg:block">
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          position: "absolute",

          justifyContent: "center",
          background: "white",
          color: "black",
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          boxShadow: "1px 2px 5px 5px #f2f2f2",

          marginLeft: "100px",
          marginTop: "-40px",
          zIndex: "9",
        }}
        onClick={onClick}
      >
        <div className="mr-4">
          <ArrowLeftIcon className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </div>
  );
}
type Props = {};

const ImgSlider = (props: Props) => {
  const carouselProperties = {
    slidesToShow: 1,
    fade: true,
    cssEase: "ease-in",
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...carouselProperties}>
      <Card img={img1} />
      <Card img={img2} />
      <Card img={img3} />
      <Card img={img4} />
      <Card img={img5} />
      <Card img={img6} />
      <Card img={img7} />
      <Card img={img8} />
      <Card img={img9} />
      <Card img={img10} />
      <Card img={img11} />
      <Card img={img12} />
      <Card img={img13} />
      <Card img={img14} />
      <Card img={img15} />
      <Card img={img16} />
      <Card img={img17} />
      <Card img={img18} />
      <Card img={img19} />
      <Card img={img20} />
      <Card img={img21} />
      <Card img={img22} />
      <Card img={img23} />
      <Card img={img24} />
    </Slider>
  );
};

export default ImgSlider;
