export const styles = {
  typography1: { fontStyle: "italic", color: "#FECB00", fontSize: "24px" },

  box1: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    px: "8rem",
    paddingBottom: "4%",
    "@media (min-width: 100px) and (max-width: 900px)": {
      px: "2rem",
    },
  },

  box2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1625604086988-6e41981275fa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    filter: "brightness(80%)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "filter 0.5s ease-in-out",
    backgroundColor: "#370031",
  },
  typography2: {
    paddingTop: "35px",
    textAlign: "center",
    color: "#ce8964",
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
    p: "30px",
    textAlign: "center",
    pb: "30px",
    backgroundColor: "#370031",
    px: 3,
  },
  typography8: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: "8px",
  },

  typography4: {
    color: "white",
  },
};
