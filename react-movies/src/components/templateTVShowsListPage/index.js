import React, { useState } from "react";
import Header from "../headerMovieList"; // You can reuse the movie header or create a specific one for TV shows
import FilterCard from "../filterTVShowsCard"; // Reuse the filter card if it works for TV shows, or create a new one
import TVShowList from "../tvShowList"; // Component to render the list of TV shows
import Grid from "@mui/material/Grid2";

function TemplateTVShowListPage({ tvShows, title, action }) { // Updated function name
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTVShows = tvShows
    .filter((tv) => {
      return tv.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1; // TV shows use "name" instead of "title"
    })
    .filter((tv) => {
      return genreId > 0 ? tv.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} /> {/* Display the page header */}
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange} // Handle user input for filters
            titleFilter={nameFilter} // Pass the name filter value
            genreFilter={genreFilter} // Pass the genre filter value
          />
        </Grid>
        <TVShowList action={action} tvShows={displayedTVShows}></TVShowList>
      </Grid>
    </Grid>
  );
}

export default TemplateTVShowListPage;