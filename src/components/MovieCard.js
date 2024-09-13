import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  const navigate = useNavigate();

  // Only trigger navigation when the user selects a video (by setting selectedVideoId)

  const handleVideoClick = () => {
    navigate("/video/" + id);
  };

  //if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={IMG_CDN_URL + posterPath}
        onClick={handleVideoClick}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
