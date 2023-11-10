// Import React and other necessary modules
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styles } from "./hero-banner.styles";
import DoubleHeader from "../double-header/double-header.components";

const BackgroundBox = () => (
  <Box
    sx={{
      ...styles.backgroundBox,
      backgroundImage:
        'url("https://images.unsplash.com/photo-1625604086816-4bfaf603e842?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    }}
  />
);

const HeroBanner = () => {
  return (
    <Box sx={styles.container} className="hero-container">
      <BackgroundBox />
      <Box sx={styles.contentBox} className="hero-content">
        <DoubleHeader
          heading={`Let's Eat Good!`}
          headingStyles={styles.headingStyles}
        />
        <Button
          sx={styles.button}
          variant="contained"
          size="large"
          color="secondary"
          href={"#begin-now"}
        >
          Begin Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
