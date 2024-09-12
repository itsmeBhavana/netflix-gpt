import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-20 pt-[16%]  absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview} </p>
      <div>
        <button className="bg-white text-black px-12 p-4 text-xl hover:bg-opacity-80 rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-12 p-4 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
