export const styles = {
  box2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundImage:
      'linear-gradient(rgba(55, 0, 49, 0.8), rgba(55, 0, 49, 0.7)), url("/images/food.png")',
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    transition: "filter 0.5s ease-in-out",
    backgroundColor: "#370031",
  },
  form: { px: "5%", display: "flex", justifyContent: "center" },
  button: {
    mb: "9%",
    mt: "3%",
    backgroundColor: "#eaf27c",
    color: "black",
    border: "thick double #eaf27c",
    "&:hover": {
      backgroundColor: "#ad6e4b",
      border: "thick double #AD6E4B",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "#CCCCCC",
      color: "#666666",
      border: "thick double #CCCCCC",
    },
    "@media (max-width:900px)": {
      fontSize: "15px",
      mt: "12%",
      mb: "19%",
    },
  },
  dh: {
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "3rem",
    "@media (max-width: 900px)": {
      fontSize: "30px",
    },
  },
  ss: {
    paddingTop: "50px",
    fontStyle: "italic",
    color: "#ce8964",
    fontSize: "24px",
    "@media (max-width: 900px)": {
      fontSize: "15px",
      marginBottom: "0.2rem",
    },
  },
  box3: { position: "relative" },
};
