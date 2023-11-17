import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { styles } from "./footer.styles";

const Footer = () => {
  return (
    <Grid container spacing={3}>
      <Grid sx={styles.grid1} item xs={12} sm={4}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ paddingTop: "80px" }}
        >
          <img
            src="/images/smart2.png"
            alt="Logo"
            style={{ width: "70%", marginBottom: "8px" }}
          />
          <Typography variant="body2" align="center">
            Turning Every Ingredient into a Culinary Masterpiece
          </Typography>
        </Grid>
      </Grid>

      <Grid sx={styles.grid2} item xs={12} sm={4}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={styles.grid3}
        >
          <Typography variant="body2" sx={styles.typography1}>
            Powered By:
          </Typography>
          <img src="/images/gpt.png" alt="Logo" style={{ width: "50%" }} />
        </Grid>
      </Grid>

      <Grid sx={styles.grid4} item xs={12} sm={4}>
        <Grid
          direction="column"
          alignItems="center"
          container
          sx={styles.grid5}
        >
          <Box>
            <Typography variant="p" component="p" sx={styles.typography2}>
              Commonly used ingredients:
            </Typography>
          </Box>
        </Grid>
        <Grid container sx={styles.grid6}>
          <Box component="ul" sx={styles.box1}>
            <Box component="li" sx={styles.box2}>
              Plantains (Africa)
            </Box>
            <Box component="li" sx={styles.box2}>
              Soy Sauce (China)
            </Box>
            <Box component="li" sx={styles.box2}>
              Cassava (Africa)
            </Box>
            <Box component="li" sx={styles.box2}>
              Basil (Italy)
            </Box>
          </Box>
          <Box component="ul" sx={styles.box1}>
            <Box component="li" sx={styles.box2}>
              Cabbage (England)
            </Box>
            <Box component="li" sx={styles.box2}>
              Gochujang (Korea)
            </Box>
            <Box component="li" sx={styles.box2}>
              Korean Pear (Korea)
            </Box>
            <Box component="li" sx={styles.box2}>
              Garlic (Italy)
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
