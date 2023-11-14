import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import Input from "../Input/input.components";

const Form = () => {
  const cusineType = ["African", "English", "Italian", "Chinese", "Japanese"];
  const servings = [1, 2, 3, 4, 5, 6, 7, 8];

  const formik = useFormik({
    initialValues: {
      cusineType: "",
      servings: "",
      ingredients: "",
      spiceLevel: "",
      occassion: "",
      dietaryPreferences: "",
    },
  });
  console.log(formik);
  return (
    <Box>
      <form>
        <Input
          element="input"
          id="ingredients"
          label="ingredients"
          value={formik.values.ingredients}
          onChange={formik.handleChange}
        />
      </form>
    </Box>
  );
};

export default Form;
