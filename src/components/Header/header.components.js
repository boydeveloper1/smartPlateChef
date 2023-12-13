import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { AuthContext } from "../context/auth-context";

import "./header.styles.css";
import { Button } from "@mui/material";

const Header = () => {
  const auth = React.useContext(AuthContext);
  const name = auth.name ? auth.name.split(" ")[0] : "";

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
            {!auth.isLoggedIn && (
              <Box>
                <Tooltip title="You are hungry again?">
                  <Button
                    variant="h6"
                    href="/authentication"
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
                        mr: "-9px",
                      },
                    }}
                  >
                    LOGIN | REGISTER
                  </Button>
                </Tooltip>
              </Box>
            )}
            {auth.isLoggedIn && (
              <Box>
                <Tooltip title="Check Cookery Book">
                  <Button
                    variant="h6"
                    href={`/${auth.userId}/dashboard`}
                    sx={{
                      border: "1.5px dashed white",
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
                        mr: "-2px",
                      },
                    }}
                  >
                    Hi, {name}
                  </Button>
                </Tooltip>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
