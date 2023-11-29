import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Grid, Button } from "@mui/material";
import Input from "../Input/input.components";
import DoubleHeader from "../double-header/double-header.components";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import { useHttpClient } from "../../Hooks/http-hook";
import LoadingSpinner from "../Loading-Spinner/loading-spinner.components";

import { formSchema } from "../../utilities/validation/validation";
import { styles } from "./form.styles";
import ErrorModal from "../Error-Modal/error-modal";
import RecipeDetails from "../Recipe-Details/recipe-details";

const BackgroundBox = () => <Box sx={styles.box2} />;

const Form = () => {
  const [loadedData, setLoadedData] = useState([]);
  const { isLoading, error, clearError, sendRequest } = useHttpClient();

  // submit handler that formik calls
  // to send http post request to BE then gpt API
  const onSubmit = async (values, actions) => {
    try {
      const response = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/gpt",
        "POST",
        JSON.stringify({
          ingredients: values.ingredients,
          cusineType: values.cusineType,
          servings: values.servings,
          occasion: values.occasion,
          dietaryPreferences: values.dietaryPreferences,
          spicelevel: values.spicelevel,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setLoadedData(response);
    } catch (error) {}
  };
  console.log(loadedData);

  const cusineType = ["African", "English", "Italian", "Chinese", "Japanese"];
  const servings = [1, 2, 3, 4, 5, 6, 7, 8];
  const occasion = ["Quick Weekday Meal", "Family Dinner", "Date Night"];
  const dietaryPreferences = ["None", "Vegetarian", "Vegan", "Keto", "Paleo"];
  const spicelevel = [
    { value: "0", name: "none" },
    { value: "1", name: "low" },
    { value: "2", name: "mid" },
    { value: "3", name: "high" },
  ];

  const {
    values,
    isValid,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      spicelevel: spicelevel[3].value,
      occasion: "",
      cusineType: "",
      servings: "",
      ingredients: "",
      dietaryPreferences: "",
    },
    validationSchema: formSchema,
    onSubmit,
    validateOnMount: true,
  });

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <LoadingSpinner
          heading={"We are creating ideas for your meal, hold tight."}
          subHeading={"getting a sumptuous recipe. relax ..."}
          asOverlay
        />
      )}

      <Box sx={{ position: "relative" }}>
        <BackgroundBox />
        <DoubleHeader
          subheading={"A Personalized Recipe Experience"}
          heading={"Crafting Your Culinary Signature"}
          headingStyles={{
            color: "white",
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "3rem",
            "@media (max-width: 900px)": {
              fontSize: "35px",
            },
          }}
          subHeadingStyles={{
            paddingTop: "50px",
            fontStyle: "italic",
            color: "#ce8964",
            fontSize: "24px",
          }}
        />
        {loadedData && (
          <RecipeDetails
            recipeData={loadedData}
            onClose={() => setLoadedData(null)}
          />
        )}
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid
            container
            columnSpacing={6}
            sx={{ px: "5%", display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <Input
                id="ingredients"
                label="List all available ingredients:"
                placeholder="E.g Beans, Rice, Egg, Paprika..."
                value={values.ingredients}
                onChange={handleChange}
                onBlur={handleBlur}
                errorText={errors.ingredients}
                className={
                  errors.ingredients && touched.ingredients
                    ? "inputs-error"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={12} l={6} xl={6}>
              <Input
                element="select"
                options={cusineType}
                id="cusineType"
                label="Cuisine type:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cusineType}
                errorText={errors.cusineType}
                className={
                  errors.cusineType && touched.cusineType ? "inputs-error" : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={12} l={6} xl={6}>
              <Input
                element="select"
                options={servings}
                id="servings"
                label="Number of servings:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.servings}
                errorText={errors.servings}
                className={
                  errors.servings && touched.servings ? "inputs-error" : ""
                }
              />
            </Grid>
            <Grid item xs={12} l={8} xl={8}>
              <Input
                element="select"
                options={occasion}
                id="occasion"
                label="Specify ocassion:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.occasion}
                errorText={errors.occasion}
                className={
                  errors.occasion && touched.occasion ? "inputs-error" : ""
                }
              />
            </Grid>
            <Grid item xs={6} l={4} xl={4}>
              <Input
                element="select"
                options={dietaryPreferences}
                id="dietaryPreferences"
                label="Dietary plan:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dietaryPreferences}
                errorText={errors.dietaryPreferences}
                className={
                  errors.dietaryPreferences && touched.dietaryPreferences
                    ? "inputs-error"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={6} xl={5}>
              <Input
                element="range"
                id="spicelevel"
                label="Spice level:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.spicelevel}
                options={spicelevel}
                errorText={errors.spicelevel}
                className={
                  errors.spicelevel && touched.spicelevel ? "inputs-error" : ""
                }
              />
            </Grid>
            <Grid item xs={8}>
              <Button
                onClick={handleSubmit}
                disabled={!isValid || isLoading}
                fullWidth
                variant="contained"
                endIcon={<OutdoorGrillIcon />}
                size="large"
                sx={{
                  mb: "9%",
                  mt: "3%",
                  backgroundColor: "#eaf27c",
                  color: "black",
                  border: "thick double #eaf27c",
                  "&:hover": {
                    backgroundColor: "#ad6e4b",
                    border: "thick double #AD6E4B",
                    color: "white",
                  },
                  "&:disabled": {
                    backgroundColor: "#CCCCCC",
                    color: "#666666",
                    border: "thick double #CCCCCC",
                  },
                  "@media (max-width:900px)": {
                    fontSize: "15px",
                    mt: "12%",
                    mb: "19%",
                  },
                }}
              >
                Let's Cook
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Form;
