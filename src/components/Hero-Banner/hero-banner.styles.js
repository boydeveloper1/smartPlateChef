export const styles = {
  container: {
    position: "relative",
  },
  box: {
    position: "relative",
    marginBottom: "4%",
    textAlign: "center",
    padding: "40px 0px",
    height: "65vh",
    width: "100%",
    maxWidth: "130%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(40%)",
    "@media (max-width: 900px)": {
      height: "40vh",
      marginBottom: "5%",
      width: "107%",
    },
  },
  typography: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "100%",
    "@media (max-width: 900px)": {
      fontSize: "25px",
      marginTop: "5%",
    },
  },
};
