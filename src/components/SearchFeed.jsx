import { Box,Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          marginBottom={2}
          sx={{
            color: "white",
          }}
        >
          Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;
