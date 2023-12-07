import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

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
    .positive("A little bit of spice will not hurt")
    .integer()
    .required("Please enter a valid spice level"),
});

export const signupSchema = yup.object().shape({
  fullName: yup
    .string("Please enter a valid full name")
    .required("Please enter a valid full name")
    .min(3, "Please enter a valid full name"),

  email: yup
    .string("Please enter a valid email address")
    .email("Please enter a valid email address")
    .required("Please enter a valid email address"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, {
      message:
        "Password must be at least 8 characters, At least one uppercase and one special character.",
    })
    .required("Please enter a valid password"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string("Please enter a valid email address")
    .email("Please enter a valid email address")
    .required("Please enter a valid email address"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, {
      message:
        "Password must be at least 8 characters, At least one uppercase and one special character.",
    })
    .required("Please enter a valid password"),
});
