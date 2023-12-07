import React, { useState, useContext, Fragment } from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/input.components";
import LoadingSpinner from "../../components/Loading-Spinner/loading-spinner.components";
import ErrorModal from "../../components/Error-Modal/error-modal";
import { signupSchema } from "../../utilities/validation/validation";
import { loginSchema } from "../../utilities/validation/validation";

import { AuthContext } from "../../components/context/auth-context";

// custom hook for server requests
import { useHttpClient } from "../../Hooks/http-hook";

import { styles } from "./auth.styles";

const Authentication = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const switchModeHandler = () => {
    setIsLoginMode(!isLoginMode);
    validateForm();
  };

  // to submit the form to db
  const authSubmitHanlder = async (values) => {
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          { "Content-Type": "application/json" }
        );
        // once the user hit the (signup), then the login state changes to true
        auth.login(responseData.userId, responseData.name, responseData.token);

        navigate("/");
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            password: values.password,
          })
        );

        // once the user hit the (login), then the login state changes to true
        auth.login(responseData.userId, responseData.name, responseData.token);

        navigate("/");
      } catch (error) {}
    }
  };

  const {
    values,
    isValid,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    validateForm,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: isLoginMode ? loginSchema : signupSchema,
    authSubmitHanlder,
    validateOnMount: true,
  });

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "85vh",
          width: "100%",
        }}
      >
        <Paper
          sx={{
            mx: 2,
            width: "400px",
            px: 3,
            py: 4,
            bgcolor: "#370031",
          }}
        >
          <form onsubmit={handleSubmit} autoComplete="off">
            {!isLoginMode && (
              <Input
                type="text"
                element="input"
                id="fullName"
                label="Full Name"
                placeholder="Enter Full Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                errorText={errors.fullName}
                className={
                  errors.fullName && touched.fullName ? "inputs-error" : ""
                }
              />
            )}
            <Input
              element="input"
              id="email"
              type="email"
              label="Email Address"
              placeholder="Enter your Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={errors.email}
              className={errors.email && touched.email ? "inputs-error" : ""}
            />
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={errors.password}
              placeholder="Enter Strong Password"
              className={
                errors.password && touched.password ? "inputs-error" : ""
              }
            />
            <Button
              onClick={handleSubmit}
              disabled={!isValid || isLoading}
              fullWidth
              variant="contained"
              size="large"
              sx={styles.button}
            >
              {isLoginMode ? "LOGIN" : "SIGN UP"}
            </Button>
          </form>
          <Typography sx={{ color: "white" }}>
            {isLoginMode
              ? "Not registered yet? Register"
              : "Already a user? You can Login"}

            <Button
              onClick={switchModeHandler}
              sx={{
                textDecoration: "none",
                ml: -0.5,
                color: "#AD6E4B",
              }}
            >
              here
            </Button>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Authentication;
