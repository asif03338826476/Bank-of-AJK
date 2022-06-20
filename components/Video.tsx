import React from "react";
// import video from "../assets/images/video.mp4";
type Props = {};

const Video = (props: Props) => {
  return (
    <div className=" flex items-center justify-center mt-4 mx-2 ">
      <video width={1000} controls autoPlay src={"/video.mp4"}></video>
    </div>
  );
};

export default Video;
