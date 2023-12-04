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
};
