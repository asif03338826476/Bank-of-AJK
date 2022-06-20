import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ImgSlider from "../components/ImgSlider";
import Navbar from "../components/Navbar";
import Video from "../components/Video";

const Home: NextPage = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <>
      <Head>
        <title>Bank of AJK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-center">
        <button
          onClick={toggleHandler}
          className=" py-1 px-3 lg:py-2 lg:px-4 bg-slate-100 duration-200 ease-in-out delay-200   hover:shadow-inner rounded   text-gray-700 text-[0.9rem] lg:text-[1.1rem] font-medium  hover:text-blue-700 mt-4"
        >
          {toggle ? "Skip Video" : "Show Video"}
        </button>
      </div>

      {toggle && <Video />}
      {!toggle && <ImgSlider />}
    </>
  );
};

export default Home;
