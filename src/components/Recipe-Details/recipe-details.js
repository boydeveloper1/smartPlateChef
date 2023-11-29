// RecipeDetails.js
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RecipeDetails = ({ recipeData, onClose }) => {
  const {
    title,
    ingredientsList,
    cookingTime,
    dietaryPlan,
    servings,
    cusineType,
  } = recipeData;

  const ingredients = ingredientsList.split("\n");
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 999,
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
          overflowY: "auto", // Enable scrolling
          backgroundColor: "#CFA336",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1000,
          padding: "20px",
        }}
      >
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
                  lineHeight: "21px",
                },
              }}
            >
              <strong> Meal Title</strong>- {title}
            </Typography>
          </Grid>
        </Grid>
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
              <strong>Cooking Time:</strong> {cookingTime}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            "@media (max-width: 900px)": {
              mt: 4,
            },
          }}
        >
          <Grid item xs={12} l={6} xl={4}>
            <Box
              sx={{
                bgcolor: "white",
                p: 2,
              }}
            >
              <Typography
                sx={{ color: "#360030", fontSize: "20px", fontWeight: "bold" }}
              >
                List of Ingredients:
              </Typography>

              {ingredients.map((ingredient, index) => (
                <Typography sx={{ lineHeight: "25px" }} key={index}>
                  {ingredient.trim()}{" "}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} m={12} l={4} xl={4}>
            <Box>
              <Typography> Cooking Instructions:</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeDetails;
