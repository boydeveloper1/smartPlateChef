// RecipeDetails.js
import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { styles } from "./recipe.styles";

const BackgroundBox = () => <Box sx={styles.box2} />;

const RecipeDetails = ({
  recipeData,
  onClose,
  serving,
  cusineType,
  ocassion,
  dietary,
  addToCookBook,
  handleSubmit,
}) => {
  const { title, ingredientsList, cookingTime, recipeList } = recipeData;

  const ingredients = ingredientsList ? ingredientsList.split("\n") : [];
  const recipe = recipeList ? recipeList.split("\n") : [];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 200,
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 500,
          padding: "20px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <BackgroundBox />
          <Button
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <CloseIcon fontSize={"medium"} />
          </Button>
          <Grid
            container
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "27px",
                  bgcolor: "#360030",
                  marginBottom: 2,
                  marginTop: "60px",
                  color: "white",
                  textAlign: "center",
                  padding: "10px 20px 10px 20px",
                  "@media (max-width: 900px)": {
                    fontSize: "15px",
                    lineHeight: "24px",
                    padding: "10px 10px 10px 10px",
                  },
                }}
              >
                {/* <strong> Meal Title : </strong> */}
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "black",
                  marginBottom: 2,
                  color: "white",
                  textAlign: "center",
                  padding: "5px 10px 5px 10px",
                  "@media (max-width: 900px)": {
                    fontSize: "10px",
                    lineHeight: "15px",
                  },
                }}
              >
                <strong> Cooking time : </strong> {cookingTime}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            columnSpacing={10}
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "row",
              "@media (max-width: 900px)": {
                mt: 4,
              },
            }}
          >
            <Grid item xs={12} l={6} xl={4}>
              <Box
                sx={{
                  bgcolor: "#4e3d13",
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    pb: 1,
                  }}
                >
                  List of Ingredients:
                </Typography>

                {ingredients.map((ingredient, index) => (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "25px",
                      color: "white",
                      pb: 0.8,
                    }}
                    key={index}
                  >
                    {ingredient.trim()}{" "}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} l={4} xl={8}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "30px",
                    color: "#360030",
                    marginBottom: 2,
                    fontWeight: "bold",
                    "@media (max-width: 900px)": {
                      fontSize: "25px",
                      mt: 6,
                    },
                  }}
                >
                  Read Cooking Instructions Carefully:
                </Typography>
                {recipe.map((recipe, index) => (
                  <Typography
                    sx={{ lineHeight: "25px", paddingBottom: "12px" }}
                    key={index}
                  >
                    {recipe.trim()}{" "}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "360030",
                  paddingTop: 3,
                  mb: 4,
                }}
              >
                {" "}
                Additional Information:
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} s={2} md={2} xl={1.5}>
              <Paper elevation={3} sx={styles.paper2}>
                <img src="/images/res.png" alt=" 1" style={{ width: "30%" }} />
                <Typography sx={styles.typography8} variant="h5">
                  No. of servings:
                </Typography>
                <Typography variant="subtitle2" sx={styles.typography4}>
                  {serving}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} s={2} md={2} xl={1.5}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="/images/cuisine1.png"
                  alt="Image 2"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Cuisine type:
                </Typography>
                <Typography variant="subtitle2" sx={styles.typography4}>
                  {cusineType}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} s={2} md={2} xl={1.5}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="/images/dinner.png"
                  alt="Image 3"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Ocassion:
                </Typography>
                <Typography variant="subtitle2" sx={styles.typography4}>
                  {ocassion}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} s={2} md={2} xl={1.5}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="/images/diet.png"
                  alt="Image 4"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Dietary plan:
                </Typography>
                <Typography variant="subtitle2" sx={styles.typography4}>
                  {dietary}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            // columnSpacing={4}
            container
            justifyContent="space-between"
            direction="flex"
            sx={{ py: "50px" }}
          >
            <Grid item>
              <Button
                size="large"
                variant="contained"
                startIcon={<HighlightOffIcon />}
                sx={{
                  bgcolor: "black",
                  "&:hover": { bgcolor: "#260b1d", color: "white" },
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Grid>

            <Grid item>
              <Button
                size="large"
                variant="contained"
                onClick={addToCookBook}
                startIcon={<StarOutlineIcon />}
                sx={{
                  bgcolor: "#360030",
                  "&:hover": { bgcolor: "green", color: "white" },
                }}
              >
                Add to CookBook
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetails;
