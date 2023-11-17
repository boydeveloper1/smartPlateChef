import React from "react";
import { useFormik } from "formik";
import { Box, Grid, Button } from "@mui/material";
import Input from "../Input/input.components";
import DoubleHeader from "../double-header/double-header.components";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

import { styles } from "./form.styles";

const BackgroundBox = () => <Box sx={styles.box2} />;

const Form = () => {
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

  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      spicelevel: spicelevel[0].value,
      occasion: "",
      cusineType: "",
      servings: "",
      ingredients: "",
      spiceLevel: "",
      occassion: "",
      dietaryPreferences: "",
    },
  });

  return (
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

      <form autoComplete="off">
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
            />
          </Grid>
          <Grid item xs={8}>
            <Button
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
                  backgroundColor: "#eaf27c",
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
  );
};

export default Form;
