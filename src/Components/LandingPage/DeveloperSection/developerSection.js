// Sumit Saurav

import React from "react";
import { Box, Container } from "@mui/material";
import DeveloperCard from "./developerCard";
import DevCardData from "./devCardData";

const DeveloperSection = () => {
  return (
    <Box>
      <Container sx={{ display: "flex" }}>
        {DevCardData.map((item) => (
          <DeveloperCard data={item} />
        ))}
      </Container>
    </Box>
  );
};

export default DeveloperSection;
