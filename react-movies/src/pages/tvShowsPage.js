import React from "react";
import { getTvShows } from "../api/tmdb-api"; // Fetch popular TV shows
import TemplateTVShowListPage from "../components/templateTVShowsListPage"; // TV show-specific template
import { useQuery } from "react-query"; // For data fetching
import Spinner from "../components/spinner"; // Loading spinner
import AddPlayListIcon from "../components/cardIcons/playListAdd"; // Icon for adding to the playlist

const TVShowsPage = () => {
  const { data, error, isLoading, isError } = useQuery("tvShows", getTvShows);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data.results;

  
  const favorites = tvShows.filter((tv) => tv.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <TemplateTVShowListPage
      title="TV Shows"
      tvShows={tvShows} // Pass TV shows to the template
      action={() => null } // Add playlist icon for each show
    />
  );
};

export default TVShowsPage;