import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./developerSection.module.css";

const DeveloperCard = ({ data }) => {
  return (
    <Box sx={{height:"360px",padding:"10px 0 80px 0"}}>
    <Box
      className="card"
      sx={{
        height: "280px",
        width: "288px",
        boxSizing: "border-box",
        padding: "30px 20px ",
        border: "1px dashed #cdf1d8",
        position: "relative",
        boxShadow: " 0 0 10px rgb(72 69 224 / 10%)",
        borderRadius: "5px",
        background: " #fff",
        margin: "0 5px",
        color: "#6084a4",
        "&:hover > .typo_color": {
          color: "white",
         
        },
        "&:hover > .typo_head_color": {
          color: "white",
        },
        "&:hover": {
          background:"linear-gradient(135deg,#23bdb8,#43e794)",
          color: "white",
        },
       
      }}
    >
      <Box sx={{ height: "50px", width: "50px", backgroundColor: "red" }}></Box>
      <Typography
        className="typo_head_color"
        sx={{
          fontSize: "18px",
          marginTop: " 25px",
          marginBottom: "15px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        {data.title}
      </Typography>
      <Typography
        className="typo_color"
        sx={{
          lineHeight: "1.8",
        }}
      >
        {data.desc}
      </Typography>
    </Box>
    </Box>
  );
};

export default DeveloperCard;
