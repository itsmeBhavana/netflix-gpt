import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const MoviePlay = () => {
  const [trailerVideo, setTrailerVideo] = useState({});
  const { videoId } = useParams();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerVideo(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  //   if (!trailerId) {
  //     return <div>No video ID found</div>;
  //   }
  return (
    <div className="md:w-screen pt-[70%] md:pt-0">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MoviePlay;
