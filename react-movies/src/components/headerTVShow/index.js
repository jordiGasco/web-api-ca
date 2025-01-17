import React from "react";
import Typography from "@mui/material/Typography";

const HeaderTVShow  = ({ tvShow }) => {
  return (
    <Typography variant="h4" component="div">
      {tvShow.name}
    </Typography>
  );
};

export default HeaderTVShow ;