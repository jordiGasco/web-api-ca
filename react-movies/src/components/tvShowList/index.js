import React from "react";
import TVShowCard from "../tvShowCard/"; // Import your TVShowCard component
import Grid from "@mui/material/Grid2";

const TVShowList = (props) => {
  let tvShowCards = props.tvShows.map((tvShow) => (
    <Grid key={tvShow.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ padding: "20px" }}>
      <TVShowCard key={tvShow.id} tvShow={tvShow} action={props.action} />
    </Grid>
  ));
  return tvShowCards;
};

export default TVShowList;