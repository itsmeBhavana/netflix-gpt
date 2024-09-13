import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.showGPTSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGPTSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // when my user is signed in
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between md:flex-row flex-col">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between p-2">
          {gptSearch && (
            <select
              className="bg-gray-900 text-white p-2 m-2 cursor-pointer"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {gptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="hidden md:inline-block w-12 h-12 mx-4"
            src={user.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-bold cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
