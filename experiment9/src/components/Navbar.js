import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  const user = sessionStorage.getItem("user");
  const role = sessionStorage.getItem("role");

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Experiment 9 - RBAC Frontend
        </Typography>

        {user && (
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            {user} ({role})
          </Typography>
        )}

        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;