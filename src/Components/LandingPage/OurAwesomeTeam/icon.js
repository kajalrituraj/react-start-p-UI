import React from "react";
import { Box } from "@mui/material";
import FeatherIcon from "feather-icons-react";

const Icon = () => {
  return (
    <Box
      sx={{
        height: "24px",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          "&:hover": {
            fill: "yellow",
            cursor: "pointer",
            transition: "all 0.4s ease",
            bottom: "5px",
            color: "yellow",
            position: "relative",
          },
        }}
      >
        <FeatherIcon
          icon="facebook"
          color="#C679E3"
          style={{
            height: "24px",
            width: "24px",
            margin: "0px 5px 0px 5px",
          }}
        />
      </Box>
      <Box
        sx={{
          "&:hover": {
            fill: "yellow",
            cursor: "pointer",
            transition: "all 0.4s ease",
            bottom: "5px",
            color: "yellow",
            position: "relative",
          },
        }}
      >
        <FeatherIcon
          style={{ height: "24px", width: "24px", margin: "0px 5px 0px 5px" }}
          icon="twitter"
          color="#c679e3"
        />
      </Box>
      <Box
        sx={{
          "&:hover": {
            fill: "yellow",
            cursor: "pointer",
            transition: "all 0.4s ease",
            bottom: "5px",
            color: "yellow",
            position: "relative",
          },
        }}
      >
        <FeatherIcon
          style={{ height: "24px", width: "24px", margin: "0px 5px 0px 5px" }}
          icon="linkedin"
          color="#c679e3"
        />
      </Box>

      <Box
        sx={{
          "&:hover": {
            fill: "yellow",
            cursor: "pointer",
            transition: "all 0.4s ease",
            bottom: "5px",
            color: "yellow",
            position: "relative",
          },
        }}
      >
        <FeatherIcon
          style={{ height: "24px", width: "24px", margin: "0px 5px 0px 5px" }}
          icon="gitlab"
          color="#c679e3"
        />
      </Box>
    </Box>
  );
};

export default Icon;
