import React from "react";
import HeaderTVShow from "../headerTVShow"; // Fix the name to match the component
 // Create a TV show-specific header
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTVShowImages } from "../../api/tmdb-api"; // TV show-specific image API
import { useQuery } from "react-query";
import Spinner from "../spinner";

const TemplateTVShowsPage = ({ tvShow, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: tvShow.id }],
    getTVShowImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data.posters;

  return (
    <>
      <HeaderTVShow  tvShow={tvShow} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{ xs: 3 }}>
          <div
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <ImageList
              sx={{
                height: "100vh",
              }}
              cols={1}
            >
              {images.map((image) => (
                <ImageListItem key={image.file_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid size={{ xs: 9 }}>{children}</Grid>
      </Grid>
    </>
  );
};

export default TemplateTVShowsPage;