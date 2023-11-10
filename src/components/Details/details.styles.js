export const styles = {
  typography1: { fontStyle: "italic", color: "#FECB00", fontSize: "24px" },

  box7: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    px: "8rem",
    marginTop: "4%",
    "@media (min-width: 100px) and (max-width: 900px)": {
      px: "2rem",
      mt: "3rem",
    },
  },
  typography7: {
    textAlign: "center",
    fontSize: "45px",
    fontWeight: "bold",
    lineHeight: "3.9rem",
    marginBottom: "5%",
    "@media (max-width: 900px)": {
      fontSize: "40px",
      lineHeight: "2.9rem",
      marginBottom: "10%",
    },
  },
  paper2: { p: "5px", textAlign: "center", pb: "30px" },
  typography8: {
    color: "green",
    fontWeight: "bold",
    paddingBottom: "8px",
  },
};
