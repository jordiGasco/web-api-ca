import React from "react";
import { useParams } from "react-router-dom";
import TemplateTVShowsPage from "../components/templateTVShowsPage";
import TVShowDetails from "../components/tvShowDetails";
import { getTVShowDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TVShowDetailsPage = () => {
  const { id } = useParams();

  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTVShowDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <TemplateTVShowsPage tvShow={tvShow}>
      <TVShowDetails tvShow={tvShow} />
    </TemplateTVShowsPage>
  );
};

export default TVShowDetailsPage;