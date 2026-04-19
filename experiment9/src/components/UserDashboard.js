import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Alert } from "@mui/material";
import Navbar from "./Navbar";

function UserDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");
  const password = sessionStorage.getItem("pass");

  const [userMessage, setUserMessage] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  if (!role) {
    window.location.href = "/";
    return null;
  }

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: {
          username,
          password,
        },
      });

      setUserMessage(res.data.message);
    } catch (err) {
      setUserMessage("Error accessing user profile");
      console.error(err);
    }
  };

  const tryAdminAccess = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: {
          username,
          password,
        },
      });

      setAdminMessage(res.data.message);
    } catch (err) {
      setAdminMessage("Access Denied: USER cannot access ADMIN endpoint");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Card className="shadow p-3">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              User Dashboard
            </Typography>

            <Typography variant="body1" gutterBottom>
              Logged in as: <strong>{username}</strong>
            </Typography>

            <Typography variant="body1" gutterBottom>
              Role: <strong>{role}</strong>
            </Typography>

            <Button
              variant="contained"
              color="success"
              className="me-3 mt-3"
              onClick={fetchUserProfile}
            >
              Get User Profile
            </Button>

            <Button
              variant="contained"
              color="warning"
              className="mt-3"
              onClick={tryAdminAccess}
            >
              Try Admin Endpoint
            </Button>

            {userMessage && (
              <Alert severity="success" className="mt-4">
                {userMessage}
              </Alert>
            )}

            {adminMessage && (
              <Alert severity="error" className="mt-3">
                {adminMessage}
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default UserDashboard;