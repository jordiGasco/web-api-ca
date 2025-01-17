import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";


const AddPlayListIcon = ({ movie }) => {
  const  { addToMustWatch } = useContext(MoviesContext);

  const handleAddToMustWatch  = (e) => {
    e.preventDefault();
    addToMustWatch(movie);
    
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToMustWatch }>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddPlayListIcon;