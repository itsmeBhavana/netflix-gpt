import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  //memoise
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //fetch trailer video and update the store with new trailer data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    //memoise
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useTrailerVideo;
