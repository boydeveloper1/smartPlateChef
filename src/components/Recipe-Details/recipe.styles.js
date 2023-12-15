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
    filter: "brightness(70%) opacity(0.22)",
    pointerEvents: "none",
  },
  box1: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 200,
  },
  box3: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxHeight: "90%",
    overflowY: "auto",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 500,
    padding: "20px",
  },
  button1: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
    color: "black",
  },
  grid1: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  typography3: {
    fontSize: "27px",
    bgcolor: "#360030",
    marginBottom: 2,
    marginTop: "60px",
    color: "white",
    textAlign: "center",
    padding: "10px 20px 10px 20px",
    "@media (max-width: 900px)": {
      fontSize: "16px",
      lineHeight: "25px",
      bgcolor: "transparent",
      color: "black",
      padding: 0,
      marginBottom: 1,
    },
  },
  typography5: {
    bgcolor: "black",
    marginBottom: 2,
    color: "white",
    textAlign: "center",
    padding: "5px 10px 5px 10px",
    "@media (max-width: 900px)": {
      fontSize: "10px",
      lineHeight: "15px",
    },
  },
  grid2: {
    mt: 8,
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 900px)": {
      mt: 4,
    },
  },
  box4: {
    bgcolor: "#4e3d13",
    p: 2,
  },
  typography6: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    pb: 1,
  },
  typography7: {
    fontSize: "14px",
    lineHeight: "25px",
    color: "white",
    pb: 0.8,
  },
  typography9: {
    fontSize: "30px",
    color: "#360030",
    marginBottom: 2,
    fontWeight: "bold",
    "@media (max-width: 900px)": {
      fontSize: "16px",
      mt: 6,
    },
  },
  typography10: {
    lineHeight: "25px",
    paddingBottom: "12px",
    fontSize: "14px",
    "@media (max-width: 900px)": {
      color: "#5e5e5e",
    },
  },
  typography11: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "360030",
    paddingTop: 3,
    mb: 4,
  },
  grid3: { py: "50px" },
  button2: {
    textTransform: "lowercase",
    bgcolor: "black",
    "&:hover": { bgcolor: "#260b1d", color: "white" },
  },
  button3: {
    textTransform: "lowercase",
    bgcolor: "#360030",
    "&:hover": { bgcolor: "#005f00", color: "white" },
  },
  button4: {
    bgcolor: "#360030",
    textTransform: "lowercase",
    "&:hover": { bgcolor: "black", color: "white" },
  },
  box5: { position: "relative" },
};
