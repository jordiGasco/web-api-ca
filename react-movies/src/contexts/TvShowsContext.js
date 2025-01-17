import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (tvShow) => {
    let newFavorites = [];
    if (!favorites.includes(tvShow.id)) {
      newFavorites = [...favorites, tvShow.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };

  const addToMustWatch = (tvShow) => {
    let newMustWatchList = [];
    if (!mustWatch.includes(tvShow.id)) {
      newMustWatchList = [...mustWatch, tvShow.id];
    } else {
      newMustWatchList = [...mustWatch];
    }
    setMustWatch(newMustWatchList);
    console.log("Updated Must Watch List:", mustWatch);
  };

  const addReview = (tvShow, review) => {
    setMyReviews({ ...myReviews, [tvShow.id]: review });
  };

  const removeFromFavorites = (tvShow) => {
    setFavorites(favorites.filter((id) => id !== tvShow.id));
  };

  return (
    <TVShowsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatch,
        addToMustWatch,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;