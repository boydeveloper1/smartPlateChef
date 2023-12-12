// RecipeDetails.js
import React, { useContext, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../Error-Modal/error-modal";
import LoadingSpinner from "../Loading-Spinner/loading-spinner.components";
import BasicModal from "../Modal/modal.components";

import { styles } from "./recipe.styles-dash";

const BackgroundBox = () => <Box sx={styles.box2} />;

const RecipeDetailsDash = ({ recipeData, onClose, onDelete }) => {
  const {
    id,
    title,
    ingredients,
    cookingTime,
    recipe,
    cusineType,
    occasion,
    servings,
    dietaryPreferences,
  } = recipeData;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const auth = useContext(AuthContext);

  const ingredient = ingredients ? ingredients.split("\n") : [];
  const recipes = recipe ? recipe.split("\n") : [];

  // to show modal before deleting
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  //  to unshow modal before deleting
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  // delete recipe
  const deleteRecipe = async (id) => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/gpt/${id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      onDelete(id);
      onClose();
    } catch (error) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <BasicModal
        open={showConfirmModal}
        close={cancelDeleteHandler}
        onConfirm={() => {
          deleteRecipe(id);
        }}
        onCancel={cancelDeleteHandler}
        header="Delete Confirmation"
        description="Are you sure you want to delete this recipe?"
      />
      <Box sx={styles.box1}></Box>
      <Box sx={styles.box3}>
        <Box sx={styles.box5}>
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
                {ingredient.map((ingredient, index) => (
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
                {recipes.map((recipe, index) => (
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
                  {servings}
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
                  {occasion}
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
                  {dietaryPreferences}
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
              <Button
                onClick={showDeleteWarningHandler}
                // href={`/${auth.userId}/dashboard`}
                size="large"
                variant="contained"
                startIcon={<DeleteIcon />}
                sx={styles.button4}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetailsDash;
