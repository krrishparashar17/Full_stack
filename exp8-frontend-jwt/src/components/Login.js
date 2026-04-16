import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password
      });

      console.log("LOGIN RESPONSE:", res.data);

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        alert("Login Successful!");
        window.location.href = "/dashboard";
      } else {
        alert("Token not found in response!");
      }
    } catch (error) {
      console.error("LOGIN ERROR:", error.response ? error.response.data : error.message);
      alert("Invalid username/password or server error!");
    }
  };

  return (
    <div className="main-container">
      <Card className="login-card shadow-lg">
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-3"
            onClick={login}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;