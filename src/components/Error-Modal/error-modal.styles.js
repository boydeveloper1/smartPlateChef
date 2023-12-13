export const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fffff",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    "@media (max-width: 900px)": {
      width: "75%",
    },
  },
  button: {
    bgcolor: "white",
    color: "#360030",
    "&:hover": { bgcolor: "#260b1d", color: "white" },
  },
};
