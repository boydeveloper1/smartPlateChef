import React, { useContext, useState, useEffect } from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/auth-context";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../../components/Error-Modal/error-modal";
import LoadingSpinner from "../../components/Loading-Spinner/loading-spinner.components";
import Footer from "../../components/Footer/footer.components";

import { styles } from "./dashboard.styles";
import RecipeDetailsDash from "../../components/Recipe-Details-Dash/recipe-details-dash";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [smartPlates, setSmartPlates] = useState([]);
  const [loadedUser, setLoadedUser] = useState([]);
  const [selectedSmartPlate, setSelectedSmartPlate] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { userId } = useParams();
  const navigate = useNavigate();

  // to logout
  const logout = () => {
    auth.logout();
    navigate("/authentication");
  };

  const name = auth.name ? auth.name.split(" ")[0] : "";

  const numberOfRecipes = loadedUser.smartPlates
    ? loadedUser.smartPlates.length
    : 0;

  const actionAfterRecipeClicked = (smartplate) => {
    setSelectedSmartPlate(smartplate);
    setIsPopupOpen(true);
  };

  // find the user immediately from the backend based off the userid in params
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
        );

        setLoadedUser(responseData.user);
      } catch (error) {}
    };
    fetchUsers();

    // if there is a loaded user then api call goes to fetch all saved smartplate for the user
    if (loadedUser) {
      const fetchSmartPlate = async () => {
        try {
          const responseData = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/gpt/user/${userId}`
          );

          setSmartPlates(responseData.smartPlates);
        } catch (error) {}
      };
      fetchSmartPlate();
    }
  }, [sendRequest, userId]);

  // this function is used to update the state after an recipe has been deleted
  // this function filter based on the deleted recipe
  const smartPlateDeletedHandler = (deletedSmartPlateId) => {
    setSmartPlates((prevsmartplate) =>
      prevsmartplate.filter(
        (smartPlate) => smartPlate.id !== deletedSmartPlateId
      )
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {/* display the popup when there is a smartplateand popup is true  */}
      {selectedSmartPlate && isPopupOpen && (
        <RecipeDetailsDash
          recipeData={selectedSmartPlate}
          onClose={() => {
            setIsPopupOpen(false);
            setSelectedSmartPlate(null);
          }}
          onDelete={smartPlateDeletedHandler}
        />
      )}
      <Box sx={styles.box1}>
        <Grid container columnSpacing={18} rowSpacing={14}>
          <Grid xs={12} md={5} item>
            <Typography sx={styles.typography1}>
              seems you're always hungry
              <strong> {name} ? </strong>
            </Typography>
            <Typography sx={styles.typography2}>choose next step:</Typography>
            <Box sx={styles.box2}>
              <Button
                size="large"
                href="/#begin-now"
                sx={{
                  bgcolor: "transparent",
                  color: "#370031",
                  border: "1px solid #370031",
                  transition: "background 0.5s ease, color 0.5s ease",
                  "&:hover": {
                    bgcolor: "#370031",
                    color: "white",
                  },
                }}
              >
                Create another recipe
              </Button>
              <Button size="large" onClick={logout} sx={styles.button1}>
                Logout
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} md={7} item>
            <Paper sx={styles.paper}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",

                  "@media (max-width: 900px)": {
                    paddingTop: "30px",
                    fontSize: "20px",
                  },
                }}
              >
                explore cookery book:
              </Typography>
              <Typography sx={styles.typography3}>
                you currently have{" "}
                <span style={{ fontSize: "40px" }}>{numberOfRecipes}</span>{" "}
                {numberOfRecipes === 1 || numberOfRecipes === 0
                  ? "recipe"
                  : "recipes"}
              </Typography>
              {smartPlates.map((smartplate, index) => {
                const cleanedTitle =
                  smartplate.title &&
                  smartplate.title.startsWith('"') &&
                  smartplate.title.endsWith('"')
                    ? smartplate.title.slice(1, -1)
                    : smartplate.title;
                return (
                  <Box key={index} sx={styles.box3}>
                    <Typography sx={styles.typography4}>
                      {cleanedTitle}
                    </Typography>
                    <Button
                      sx={styles.button2}
                      // saved the clicked recipe in the state to then render to a popup screen
                      onClick={() => actionAfterRecipeClicked(smartplate)}
                    >
                      More Details
                    </Button>
                  </Box>
                );
              })}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;
