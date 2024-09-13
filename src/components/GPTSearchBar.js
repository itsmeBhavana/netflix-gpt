import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  //search a movie in the TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, God father, Borderlands";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      return;
    }
    //movie1, movie2, movie3, movie4, movie5
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    //[movie1,movie2, movie3, movie4, movie5]
    //For each movie run the TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[promise1, promise2, promise3, promise4, promise5]
    const tmdbresults = await Promise.all(promiseArray);
    console.log(tmdbresults);
    dispatch(addGPTMovieResult({movieNames:gptMovies, movieResults: tmdbresults}));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
