import Image from "next/image";
import React from "react";
import img from "../assets/images/1.png";
type Props = {
  img: any;
};

const Card = (props: Props) => {
  return (
    <div className="flex items-center justify-center m-auto w-[90%] md:w-[70%] mt-4">
      <div className="w-full">
        <Image src={props.img} />
      </div>
    </div>
  );
};

export default Card;
