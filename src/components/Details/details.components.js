import React from "react";

import { Box, Typography, Grid, Paper } from "@mui/material";

import { styles } from "./details.styles";

const Details = () => {
  return (
    <Box id="begin-now" sx={styles.box7}>
      <Typography variant="body1" sx={styles.typography1}>
        Work Plan
      </Typography>
      <Typography variant="h2" sx={styles.typography7}>
        Discover How We Work
      </Typography>
      <Grid container spacing={5}>
        {/* Box 1 */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={styles.paper2}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/sign-up-2887083-2396452.png?f=webp&w=512"
              alt=" 1"
              style={{ width: "30%" }}
            />
            <Typography sx={styles.typography8} variant="h5">
              Sign up
            </Typography>
            <Typography variant="subtitle2">
              Create an account to enjoy all features of this application.
            </Typography>
          </Paper>
        </Grid>
        {/* Box 2 */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={styles.paper2}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-add-event-8-1131249.png?f=webp&w=512"
              alt="Image 2"
              style={{ width: "30%" }}
            />
            <Typography sx={styles.typography8} variant="h5">
              Add your Event
            </Typography>
            <Typography variant="subtitle2">
              Add an event to start monetizing immediately.
            </Typography>
          </Paper>
        </Grid>
        {/* Box 3 */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={styles.paper2}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/modify-4114221-3416168.png?f=webp&w=512"
              alt="Image 3"
              style={{ width: "30%" }}
            />
            <Typography sx={styles.typography8} variant="h5">
              Modify Event
            </Typography>
            <Typography variant="subtitle2">
              Wrong details on your event? Edit at ease.
            </Typography>
          </Paper>
        </Grid>
        {/* Box 4 */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={styles.paper2}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/purchase-19-1072417.png?f=webp&w=512"
              alt="Image 4"
              style={{ width: "30%" }}
            />
            <Typography sx={styles.typography8} variant="h5">
              Purchase Ticket
            </Typography>
            <Typography variant="subtitle2">
              Surf our hot catalogue of events and make a purchase.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
