import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography, Alert } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      setError("");

      // Step 1: Try user endpoint first
      const userRes = await axios.get("http://localhost:8080/api/user/profile", {
        auth: {
          username,
          password,
        },
      });

      if (userRes.status === 200) {
        // Store session data
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("pass", password);

        // Step 2: Check if admin by calling admin endpoint
        try {
          const adminRes = await axios.get("http://localhost:8080/api/admin/dashboard", {
            auth: {
              username,
              password,
            },
          });

          if (adminRes.status === 200) {
            sessionStorage.setItem("role", "ADMIN");
            window.location.href = "/admin";
            return;
          }
        } catch (adminErr) {
          // If admin endpoint fails, treat as USER
        }

        sessionStorage.setItem("role", "USER");
        window.location.href = "/user";
      }
    } catch (err) {
      setError("Invalid credentials or backend/CORS issue");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "420px", padding: "20px", borderRadius: "15px" }}>
        <CardContent>
          <Typography variant="h4" className="text-center mb-4">
            Login
          </Typography>

          {error && <Alert severity="error" className="mb-3">{error}</Alert>}

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={login}
            sx={{ marginTop: 2 }}
          >
            LOGIN
          </Button>

          <Typography variant="body2" sx={{ marginTop: 3 }}>
            <strong>Test Credentials:</strong>
          </Typography>
          <Typography variant="body2">
            USER → user1 / user123
          </Typography>
          <Typography variant="body2">
            ADMIN → admin1 / admin123
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;