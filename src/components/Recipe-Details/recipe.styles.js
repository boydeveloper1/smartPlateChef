export const styles = {
  typography1: { fontStyle: "italic", color: "#FECB00", fontSize: "24px" },

  typography2: {
    paddingTop: "35px",
    textAlign: "center",
    color: "white",
    fontSize: "63px",
    fontWeight: "bold",
    lineHeight: "3.9rem",
    marginBottom: "5%",
    "@media (max-width: 900px)": {
      fontSize: "40px",
      lineHeight: "2.9rem",
      marginBottom: "10%",
    },
  },
  paper2: {
    p: "10px",
    textAlign: "center",
    backgroundColor: "#4e3d12",
    px: 1,
  },
  typography8: {
    paddingTop: "7px",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    paddingBottom: "2px",
  },

  typography4: {
    color: "white",
  },
  box2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/images/food.png")',
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundColor: "transparent",
    filter: "brightness(70%) opacity(0.3)",
    pointerEvents: "none",
  },
};
