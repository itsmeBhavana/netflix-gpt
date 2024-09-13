import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate("/video/" + movieId);
  };
  const handleInfo = () => {
    navigate("/video/" + movieId);
  };
  return (
    <div className="px-6 pt-[30%] md:pt-[16%] md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview} </p>
      <div className="my-4 md:m-0">
        <button
          className=" bg-white text-black py-1 px-3 md:px-12 md:py-4 text-xl hover:bg-opacity-80 rounded-md"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="hidden md:inline-block bg-gray-500 text-white py-1 px-3 md:px-12 md:py-4 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md mx-2"
          onClick={handleInfo}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
