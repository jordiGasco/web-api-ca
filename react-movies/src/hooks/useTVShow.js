import { useEffect, useState } from "react";
import { getTVShowDetails } from "../api/tmdb-api"; // Adjust the path to your API function

const useTVShow = (id) => {
  const [tvShow, setTVShow] = useState(null); // State to hold TV show details

  useEffect(() => {
    const fetchTVShow = async () => {
      try {
        const tvShowData = await getTVShowDetails(id); // Fetch TV show details
        setTVShow(tvShowData); // Update state with the fetched details
      } catch (err) {
        console.error("Error fetching TV show details:", err); // Log error to console
      }
    };

    fetchTVShow(); // Trigger the fetch function
  }, [id]); // Dependency array ensures this runs whenever the `id` changes

  return [tvShow, setTVShow]; // Return the state and its setter
};

export default useTVShow;