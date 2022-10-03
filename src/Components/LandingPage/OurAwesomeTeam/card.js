import React from "react";
import { Box, Typography } from "@mui/material";
import Icon from "./icon";

const Card = ({ data }) => {
  return (
    <Box
      sx={{
        height: "433px",
        width: "280px",
        padding: "35px 0px 35px 0px",
        backgroundColor: "#fff",
        marginBottom: "30px",
        boxSizing: "border-box",
        position: "relative",
        marginRight:"30px",
        "&:hover": {
          fill: "yellow",
          cursor: "pointer",
          transition: "all 0.4s ease",
          // bottom: "5px",
          color: "yellow",
          position: "relative",
          // backgroundColor:"red"
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "100px",
          background: "#f9f6f6",
          height: "10px",
          width: " 100%",
          // backgroundColor: "red",
          "&:hover": {
           backgroundColor:"white"
          },
        }}
      ></Box>
      <Box
        sx={{
          height: "131px",
          width: "209px",
          padding: "0px 35px 0px 35px",
          // backgroundColor: "blue",
          marginBottom: "30px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          // zIndex: "-456",
        }}
      >
        <img
          alt=""
          style={{
            border: "3px solid #cdf1d8",
            width: " auto",
            borderRadius: "50%",
            // display: "inline-block",
            transition: ".5s",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            justifyItem: "center",
            "&:hover": {
              border: "3px solid red",
              backgroundColor:"yellow"
            },
            // textAlign:"center",
          }}
          src={data.imgsrc}
        />
      </Box>
      <Box
        sx={{
          height: "209px",
          width: "207px",
          padding: "0px 35px 0px 35px",
          //   backgroundColor: "green",
        }}
      >
        <Box
          sx={{
            height: "47px",
            width: "160px",
            backgroundColor: "black",
            padding: "10px 15px",
            background: "linear-gradient(135deg,#23bdb8,#43e794)",
            borderRadius: "75px",
            margin: "25px 10px",
            transition: " .5s",
            "&:hover": {
              borderRadius: "0px",
            },
          }}
        >
          <Typography
            sx={{
              boxSizing: "border-box",
              textAlign: "center",
              fontSize: "18px",
              marginBottom: "5px",
              color: "#fff",
              fontWeight: "500",
              lineHeight: "1.2",
            }}
          >
            {data.name}
          </Typography>
          <Typography
            style={{ color: " #fff", fontSize: "13px", textAlign: "center" }}
          >
            {data.Jobrole}
          </Typography>
        </Box>

        <Icon />
        <Typography
          sx={{
            marginTop: "15px",
            color: "#6084a4",
            lineHeight: "1.8",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {data["description"]}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
