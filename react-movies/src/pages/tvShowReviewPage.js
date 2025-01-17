import React from "react";
import { useLocation } from "react-router-dom";
import TemplateTVShowsPage from "../components/templateTVShowsPage"; // Adjust to the appropriate TV show page template
import TVShowReview from "../components/tvShowReview"; // Replace with your TV show review component

const TVShowReviewPage = (props) => {
  let location = useLocation();
  const { tvShow, review } = location.state; 
  
  return (
    <TemplateTVShowsPage tvShow={tvShow}>
      <TVShowReview review={review} />
    </TemplateTVShowsPage>
  );
};

export default TVShowReviewPage;