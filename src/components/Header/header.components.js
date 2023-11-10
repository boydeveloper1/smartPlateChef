import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import "./header.styles.css";

const Header = () => {
  return (
    <>
      <AppBar position="static" style={{ background: "#370031" }}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img className="logo" src="/images/smart.png"></img>
            </Link>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="You are hungry again?">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="authentication"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "flex" },
                    fontFamily: "MONOSPACE",
                    fontWeight: "bold",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "@media (max-width: 900px)": {
                      fontSize: "8px",
                    },
                  }}
                >
                  LOGIN | REGISTER
                </Typography>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
