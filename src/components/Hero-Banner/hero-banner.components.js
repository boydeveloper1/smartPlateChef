import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "./hero-banner.styles";

const HeroBanner = ({ text, src }) => {
  return (
    <div style={styles.container}>
      <Box
        sx={{
          ...styles.box,
          backgroundImage: `url(${
            src ||
            "https://t4.ftcdn.net/jpg/03/81/25/29/240_F_381252938_XfKEvBc6Z3flOUPN7Q80eHStdmcFSUBq.jpg"
          })`,
        }}
      ></Box>
      <Typography
        sx={{ ...styles.typography, color: "#ffffff" }}
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
      >
        {text}
      </Typography>
    </div>
  );
};

export default HeroBanner;
