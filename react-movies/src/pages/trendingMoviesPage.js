import React from "react";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from '../components/templateMovieListPage';
import AddPlayListIcon from '../components/cardIcons/playListAdd'

const TrendingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('trendingMoviesPage', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddPlayListIcon movie={movie} />
      }}
    />
);
};
export default TrendingMoviesPage;