import React, { useContext, useState, useEffect } from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/auth-context";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../../components/Error-Modal/error-modal";
import LoadingSpinner from "../../components/Loading-Spinner/loading-spinner.components";
import Footer from "../../components/Footer/footer.components";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [smartPlates, setSmartPlates] = useState([]);
  const [loadedUser, setLoadedUser] = useState([]);
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

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <Box
        sx={{
          p: 5,
          mb: "10%",
          "@media (max-width: 900px)": {
            p: 1,
            pt: 6,
            mb: "30%",
          },
        }}
      >
        <Grid container columnSpacing={18} rowSpacing={14}>
          <Grid xs={12} md={5} item>
            <Typography
              sx={{
                height: "380px",
                fontSize: "80px",
                color: "white",
                bgcolor: "#370031",
                p: 4,
                transition: "font-size 0.5s ease, padding 0.5s ease",
                "@media (max-width: 900px)": {
                  fontSize: "55px",
                  p: 2,
                  height: "65%",
                },
              }}
            >
              seems you're always hungry
              <strong> {name} ? </strong>
            </Typography>
            <Typography
              sx={{
                fontSize: "34px",
                color: "black",
                marginTop: 3,
                fontWeight: "bold",
                opacity: 0.8,
                transition: "opacity 0.5s ease, font-size 0.5s ease",
              }}
            >
              choose next step:
            </Typography>
            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
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
              <Button
                size="large"
                onClick={logout}
                sx={{
                  bgcolor: "#77006a",
                  color: "white",
                  border: "1px solid #370031",
                  transition: "background 0.5s ease, color 0.5s ease",
                  "&:hover": {
                    bgcolor: "#5c005b",
                  },
                }}
              >
                Logout
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} md={7} item>
            <Paper
              sx={{
                border: "0.5px solid white",
                p: 4,
                height: "380px",
                overflow: "auto",
                backgroundImage: 'url("/images/diagonales-decalees.png")',
                verticalAlign: "center",
                "@media (max-width: 900px)": {
                  p: 0,
                  height: "400px",
                },
              }}
            >
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
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#712700",

                  "@media (max-width: 900px)": {
                    fontSize: "22px",
                  },
                }}
              >
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
                    ? smartplate.title.slice(1, -1) // Remove the quotation marks
                    : smartplate.title;
                return (
                  <Box
                    key={index}
                    sx={{
                      margin: "5px 0 13px",
                      borderRadius: "12px",
                      bgcolor: "#370031",
                      height: "100px",
                      width: "90%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 2,
                      pl: 4,

                      position: "relative",
                      transition: "transform 0.5s ease, box-shadow 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        bgcolor: "#4a003f",
                      },
                      "@media (max-width: 900px)": {
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        pl: 2,
                        transition: "transform 0.5s ease, box-shadow 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.005)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                          bgcolor: "#4a003f",
                        },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "18px",
                        "@media (max-width: 900px)": {
                          fontSize: "13px",
                        },
                      }}
                    >
                      {cleanedTitle}
                    </Typography>
                    <Button
                      sx={{
                        marginLeft: 3,
                        bgcolor: "#87007c",
                        color: "white",
                        borderRadius: "5px",
                        "&:hover": {
                          bgcolor: "#a80094",
                        },
                        "@media (max-width: 900px)": {
                          marginLeft: 0,
                          marginTop: 2,
                        },
                      }}
                    >
                      View More
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
