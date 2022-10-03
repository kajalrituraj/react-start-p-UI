// Kajal Rituraj

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Card from "./card";
import StaticData from "./cardData";

const OurAwesomeTeam = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "670px",
          backgroundColor: "#f9f6f6",
          padding: "80px 0px 80px 0px",
        }}
      >
        <Container
          sx={{
            height: "131px",
            // backgroundColor: "#fff",
            marginBottom: "50px",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontWeight: " 600", textAlign: "center" }}
          >
            Our Awesome Team
          </Typography>
          <Box sx={{ height: "45px", backgroundColor: "" }}>
            <Box
              sx={{
                height: "5px",
                width: "90px",
                backgroundColor: "#cdf1d8",
                margin: "20px auto",
                position: "relative",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                 
                  position: "absolute",
                  left: "0",
                  top: "-2.7px",
                  height: "10px",
                  width: " 10px",
                  borderRadius: "50%",
                  background: "#44ce6f",
                  animationduration:" 3s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationName: "MOVE-BG",
                }}
              ></Box>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#6084a4",
              lineHeight: "1.8",
              fontSize: "14px",

              // width:"520px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Container>
        <Box sx={{ display: "flex" }}>
          {StaticData.map((item) => (
            <Card data={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurAwesomeTeam;
