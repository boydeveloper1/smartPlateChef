export const styles = {
  button: {
    mb: "4%",
    mt: "3%",
    backgroundColor: "#ad6e4b",
    color: "black",
    border: "thick double #ad6e4b",
    "&:hover": {
      backgroundColor: "black",
      border: "thick double black",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "#CCCCCC",
      color: "#666666",
      border: "thick double #CCCCCC",
    },
    "@media (max-width:900px)": {
      fontSize: "15px",
      mt: "5%",
      mb: "5%",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "85vh",
    width: "100%",
  },
  paper: {
    mx: 2,
    width: "400px",
    px: 3,
    py: 4,
    bgcolor: "#370031",
  },
  typography1: { color: "white", fontSize: "14px" },
  button1: {
    textDecoration: "none",
    ml: -1,
    color: "#AD6E4B",
    fontSize: "14px",
  },
};
