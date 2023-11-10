export const styles = {
  container: {
    position: "relative",
    color: "#ffffff",
    textAlign: "center",
    minHeight: "80vh",
    maxHeight: "50em",
    backgroundColor: "#370031",
    overflow: "hidden",
    transition: "background-color 0.5s ease-in-out",

    "@media (max-width: 900px)": {
      minHeight: "54vh",
    },

    "&:hover": {
      backgroundColor: "#6D3689",
    },
  },
  backgroundBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    filter: "brightness(40%)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "filter 0.5s ease-in-out",

    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  contentBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "90%",
    transition: "opacity 0.5s ease-in-out",

    ".hero-container:hover &": {
      opacity: 0.8,
    },
  },
  button: {
    backgroundColor: "#CE8964",
    color: "white",
    "&:hover": {
      backgroundColor: "#832232",
      color: "white",
    },
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  },
  headingStyles: {
    fontSize: "100px",
    fontWeight: "bold",
    marginBottom: "3rem",
    lineHeight: "90%",
    animation: "fadeInUp 1s ease-out",

    "@media (max-width: 900px)": {
      fontSize: "45px",
      marginBottom: "1rem",
      lineHeight: "4.0rem",
    },
    "@media (min-width: 2646px) and (max-width: 5000px)": {
      fontSize: "100px",
    },
  },
  subHeadingStyles: {
    fontStyle: "italic",
    color: "#ce8964",
    fontSize: "24px",
    zIndex: 2,
    marginBottom: "0.5rem",
    "@media (max-width: 900px)": {
      fontSize: "15px",
      marginBottom: "0.5rem",
    },
  },

  "@keyframes fadeInUp": {
    from: {
      opacity: 0,
      transform: "translate(20px, 20px)",
    },
    to: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
  },
};
