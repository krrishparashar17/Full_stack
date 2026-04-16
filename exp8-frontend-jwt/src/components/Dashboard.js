import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  const getProtectedData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setData(res.data);
    } catch (error) {
      console.error("PROTECTED ERROR:", error.response ? error.response.data : error.message);
      alert("Unauthorized access or invalid token!");
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/auth/logout",
        {},
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
    } catch (error) {
      console.error("LOGOUT ERROR:", error.response ? error.response.data : error.message);
    }

    sessionStorage.removeItem("token");
    alert("Logged out successfully!");
    window.location.href = "/";
  };

  return (
    <div className="main-container">
      <Card className="dashboard-card shadow-lg">
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Dashboard
          </Typography>

          <Typography variant="body1" align="center" className="mb-3">
            Welcome! You are logged in.
          </Typography>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button variant="contained" color="success" onClick={getProtectedData}>
              Fetch Protected Data
            </Button>

            <Button variant="contained" color="error" onClick={logout}>
              Logout
            </Button>
          </div>

          {data && (
            <div className="mt-4 p-3 bg-light rounded">
              <Typography variant="h6">Protected API Response:</Typography>
              <Typography variant="body2">{data}</Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;