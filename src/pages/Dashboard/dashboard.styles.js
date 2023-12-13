export const styles = {
  box1: {
    p: 5,
    mb: "10%",
    "@media (max-width: 900px)": {
      p: 1,
      pt: 6,
      mb: "30%",
    },
  },
  typography1: {
    height: "auto",
    fontSize: "60px",
    color: "white",
    bgcolor: "#370031",
    p: 4,
    transition: "font-size 0.5s ease, padding 0.5s ease",
    "@media (max-width: 960px)": {
      fontSize: "50px",
      p: 2,
      height: "auto",
    },
  },
  typography2: {
    fontSize: "25px",
    color: "black",
    marginTop: 3,
    fontWeight: "bold",
    opacity: 0.8,
    transition: "opacity 0.5s ease, font-size 0.5s ease",
    "@media (max-width: 900px)": {
      fontSize: "20px",
    },
  },
  box2: { display: "flex", gap: 2, marginTop: 2 },
  button3: {
    bgcolor: "transparent",
    color: "#370031",
    border: "1px solid #370031",
    transition: "background 0.5s ease, color 0.5s ease",
    "&:hover": {
      bgcolor: "#370031",
      color: "white",
    },
  },
  button1: {
    bgcolor: "#77006a",
    color: "white",
    border: "1px solid #370031",
    transition: "background 0.5s ease, color 0.5s ease",
    "&:hover": {
      bgcolor: "#5c005b",
    },
  },
  disabledButton: {
    bgcolor: "lightgray",
    color: "darkgray",
    border: "1px solid darkgray",
  },
  paper: {
    border: "0.5px solid white",
    p: 4,
    height: "380px",
    overflow: "auto",
    backgroundImage: 'url("/images/diagonales-decalees.png")',
    verticalAlign: "center",
    "@media (max-width: 900px)": {
      p: 0,
      height: "400px",
      marginTop: "-60px",
    },
  },
  typography3: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#712700",

    "@media (max-width: 900px)": {
      fontSize: "22px",
    },
  },
  box3: {
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
  },
  typography4: {
    color: "white",
    fontSize: "18px",
    "@media (max-width: 900px)": {
      fontSize: "13px",
    },
  },
  button2: {
    textTransform: "lowercase",
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
  },
  typography5: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",

    "@media (max-width: 900px)": {
      paddingTop: "30px",
      fontSize: "20px",
    },
  },
};
