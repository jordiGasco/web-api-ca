import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

export default function TVShowCard({ tvShow, action }) {
  
    const { favorites, addToFavorites } = useContext(MoviesContext);

    if (favorites.find((id) => id === tvShow.id)) {
      tvShow.favorite = true;
    } else {
      tvShow.favorite = false;
    }
  
    const handleAddToFavorite = (e) => {
      e.preventDefault();
      addToFavorites(tvShow);
    };

  return (
    <Card sx={{ backgroundColor: "blue", color: "white" }}>
  <CardHeader
    avatar={
      tvShow.favorite ? (
        <Avatar sx={{ backgroundColor: "red" }}>
          <FavoriteIcon />
        </Avatar>
      ) : null
    }
    title={
      <Typography variant="h5" component="p" sx={{ color: "white" }}>
        {tvShow.name}{" "}
      </Typography>
    }
  />
  <CardMedia
    sx={{ height: 500 }}
    image={
      tvShow.poster_path
        ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
        : img
    }
  />
  <CardContent>
    <Grid container>
      <Grid item xs={6}>
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <CalendarIcon fontSize="small" sx={{ marginRight: "5px" }} />
          {tvShow.first_air_date}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <StarRateIcon fontSize="small" sx={{ marginRight: "5px" }} />
          {tvShow.vote_average}
        </Typography>
      </Grid>
    </Grid>
  </CardContent>
  {action(tvShow)}
  <CardActions disableSpacing>
    <Link to={`/tvshows/${tvShow.id}`} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        size="medium"
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
      >
        More Info ...
      </Button>
    </Link>
  </CardActions>
</Card>
  );
}