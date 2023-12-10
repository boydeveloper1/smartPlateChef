// RecipeDetails.js
import React, { useContext, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../Error-Modal/error-modal";
import LoadingSpinner from "../Loading-Spinner/loading-spinner.components";

import { styles } from "./recipe.styles";

const BackgroundBox = () => <Box sx={styles.box2} />;

const RecipeDetails = ({
  recipeData,
  onClose,
  serving,
  cusineType,
  ocassion,
  dietary,
}) => {
  const { title, ingredientsList, cookingTime, recipeList } = recipeData;

  const [loaded, setLoaded] = useState(false);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const ingredients = ingredientsList ? ingredientsList.split("\n") : [];
  const recipe = recipeList ? recipeList.split("\n") : [];

  // send to backend and bd of a user
  const addToCookBook = async () => {
    try {
      const responseData = sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/gpt/smartplate/${auth.userId}`,
        "POST",
        JSON.stringify({
          ingredients: ingredientsList,
          cusineType: cusineType,
          servings: serving,
          occasion: ocassion,
          dietaryPreferences: dietary,
          title: title,
          cookingTime: cookingTime,
          recipe: recipeList,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      setLoaded(true);
    } catch (error) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <Box sx={styles.box1}></Box>
      <Box sx={styles.box3}>
        <Box sx={{ position: "relative" }}>
          <BackgroundBox />
          <Button onClick={onClose} sx={styles.button1}>
            <CloseIcon fontSize={"medium"} />
          </Button>
          <Grid container sx={styles.grid1}>
            <Grid item xs={12}>
              <Typography variant="h4" sx={styles.typography3}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={styles.typography5}>
                <strong> Cooking time : </strong> {cookingTime}
              </Typography>
            </Grid>
          </Grid>
          <Grid container columnSpacing={10} sx={styles.grid2}>
            <Grid item xs={12} l={6} xl={4}>
              <Box sx={styles.box4}>
                <Typography sx={styles.typography6}>
                  List of Ingredients:
                </Typography>
                {ingredients.map((ingredient, index) => (
                  <Typography sx={styles.typography7} key={index}>
                    {ingredient.trim()}{" "}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} l={4} xl={8}>
              <Box>
                <Typography variant="h4" sx={styles.typography9}>
                  Read Cooking Instructions Carefully:
                </Typography>
                {recipe.map((recipe, index) => (
                  <Typography sx={styles.typography10} key={index}>
                    {recipe.trim()}{" "}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={styles.typography11}>
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
            container
            justifyContent="space-between"
            direction="flex"
            sx={styles.grid3}
          >
            <Grid item>
              <Button
                size="large"
                variant="contained"
                startIcon={<ClearIcon />}
                sx={styles.button2}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Grid>

            <Grid item>
              {!loaded && (
                <Button
                  size="large"
                  variant="contained"
                  onClick={addToCookBook}
                  startIcon={<StarOutlineIcon />}
                  sx={styles.button3}
                >
                  Add to CookBook
                </Button>
              )}
              {loaded && (
                <>
                  <Button
                    href={`/${auth.userId}/dashboard`}
                    size="large"
                    variant="contained"
                    startIcon={<StarIcon />}
                    sx={styles.button4}
                  >
                    View Cookery Book
                  </Button>
                  <Typography component="p" sx={{ color: "#4e3d12" }}>
                    recipe added to cooking book.
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetails;
