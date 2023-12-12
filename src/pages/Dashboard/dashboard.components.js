import React, { useContext, useState, useEffect } from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/auth-context";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../../components/Error-Modal/error-modal";
import LoadingSpinner from "../../components/Loading-Spinner/loading-spinner.components";
import Footer from "../../components/Footer/footer.components";
import RecipeDetailsDash from "../../components/Recipe-Details-Dash/recipe-details-dash";
import BasicModal from "../../components/Modal/modal.components";

import { styles } from "./dashboard.styles";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [smartPlates, setSmartPlates] = useState([]);
  const [selectedSmartPlate, setSelectedSmartPlate] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { userId } = useParams();
  const navigate = useNavigate();

  const name = auth.name ? auth.name.split(" ")[0] : "";

  const numberOfRecipes = smartPlates ? smartPlates.length : 0;

  // to logout
  const logout = () => {
    auth.logout();
    navigate("/authentication");
  };

  // to show modal before deleting
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  //  to unshow modal before deleting
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const actionAfterRecipeClicked = (smartplate) => {
    setSelectedSmartPlate(smartplate);
    setIsPopupOpen(true);
  };

  const onClose = () => {
    setIsPopupOpen(false);
    setSelectedSmartPlate(null);
  };

  // find the smartplates from the user immediately from the backend based off the userid in params
  useEffect(() => {
    const fetchSmartPlate = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/gpt/user/${userId}`
        );

        setSmartPlates(responseData.smartPlates);
      } catch (error) {}
    };
    fetchSmartPlate();
  }, [sendRequest, userId]);

  // this function is used to update the state after a recipe has been deleted
  // this function filter based on the deleted recipe
  const smartPlateDeletedHandler = (deletedSmartPlateId) => {
    setSmartPlates((prevsmartplate) =>
      prevsmartplate.filter(
        (smartPlate) => smartPlate.id !== deletedSmartPlateId
      )
    );
  };

  // delete all recipe from cookery book
  const deleteRecipe = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/gpt/all/${auth.userId}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      setSmartPlates([]);
    } catch (error) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <BasicModal
        open={showConfirmModal}
        close={cancelDeleteHandler}
        onConfirm={() => {
          deleteRecipe();
        }}
        onCancel={cancelDeleteHandler}
        header="Delete Confirmation"
        description="Are you sure you want to delete all recipes from your cookery book?"
      />
      {/* display the popup when there is a smartplateand popup is true  */}
      {selectedSmartPlate && isPopupOpen && (
        <RecipeDetailsDash
          recipeData={selectedSmartPlate}
          onClose={onClose}
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
              <Button size="large" href="/#begin-now" sx={styles.button3}>
                Create another recipe
              </Button>
              <Button size="large" onClick={logout} sx={styles.button1}>
                Logout
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} md={7} item>
            <Paper sx={styles.paper}>
              <Typography sx={styles.typography5}>
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
            <Typography sx={styles.typography2}>clear cookery book:</Typography>

            <Box sx={styles.box2}>
              <Button
                size="large"
                onClick={showDeleteWarningHandler}
                sx={{
                  ...styles.button1,
                  ...(numberOfRecipes === 0 && styles.disabledButton),
                }}
                disabled={numberOfRecipes === 0}
              >
                Delete all Recipe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;
