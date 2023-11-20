import * as yup from "yup";

export const formSchema = yup.object().shape({
  ingredients: yup.string().required("Please enter a valid ingredient"),
  cusineType: yup.string().required("Please enter a valid cuisine"),
  servings: yup
    .number()
    .positive()
    .integer()
    .required("Please enter a valid number of servings"),
  occasion: yup.string().required("Please enter a valid ocassion"),
  dietaryPreferences: yup
    .string()
    .required("Please enter a valid dietary plan"),
  spicelevel: yup
    .number()
    .positive()
    .integer()
    .required("Please enter a valid spice level"),
});
