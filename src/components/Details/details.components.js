import React from "react";

import { Box, Typography, Grid, Paper } from "@mui/material";

import { styles } from "./details.styles";

const BackgroundBox = () => <Box sx={styles.box2} />;

const Details = () => {
  return (
    <Box id="begin-now" sx={styles.box1}>
      <BackgroundBox />
      <Box sx={{ zIndex: 1 }}>
        <Typography variant="h2" sx={styles.typography2}>
          Get Started.
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={styles.paper2}>
              <img
                src="/images/inmgredients.png"
                alt=" 1"
                style={{ width: "30%" }}
              />
              <Typography sx={styles.typography8} variant="h5">
                Add ingredients
              </Typography>
              <Typography variant="subtitle2" sx={styles.typography4}>
                Add list of all the ingredients you have available at home.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={styles.paper2}>
              <img
                src="/images/dietary.png"
                alt="Image 2"
                style={{ width: "30%" }}
              />
              <Typography sx={styles.typography8} variant="h5">
                Dietary Preferences
              </Typography>
              <Typography variant="subtitle2" sx={styles.typography4}>
                Choose between varieties of dietary for personalization.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={styles.paper2}>
              <img
                src="/images/Cuisine.png"
                alt="Image 3"
                style={{ width: "30%" }}
              />
              <Typography sx={styles.typography8} variant="h5">
                Cusine Type
              </Typography>
              <Typography variant="subtitle2" sx={styles.typography4}>
                Specify the cuisine you prefer, such as Italian, Mexican, Asian,
                or Mediterranean.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} sx={styles.paper2}>
              <img
                src="/images/smartplate.png"
                alt="Image 4"
                style={{ width: "30%" }}
              />
              <Typography sx={styles.typography8} variant="h5">
                Smartplate Activated
              </Typography>
              <Typography variant="subtitle2" sx={styles.typography4}>
                A personalized recipe will be generated based on your selection.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Details;
