import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Alert } from "@mui/material";
import Navbar from "./Navbar";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");
  const password = sessionStorage.getItem("pass");

  const [adminMessage, setAdminMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  if (role !== "ADMIN") {
    alert("Access Denied");
    window.location.href = "/";
    return null;
  }

  const fetchAdminDashboard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: {
          username,
          password,
        },
      });

      setAdminMessage(res.data.message);
    } catch (err) {
      setAdminMessage("Error accessing admin dashboard");
      console.error(err);
    }
  };

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

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Card className="shadow p-3">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Admin Dashboard
            </Typography>

            <Typography variant="body1" gutterBottom>
              Logged in as: <strong>{username}</strong>
            </Typography>

            <Typography variant="body1" gutterBottom>
              Role: <strong>{role}</strong>
            </Typography>

            <Button
              variant="contained"
              color="error"
              className="me-3 mt-3"
              onClick={fetchAdminDashboard}
            >
              Get Admin Dashboard
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="mt-3"
              onClick={fetchUserProfile}
            >
              Get User Profile
            </Button>

            {adminMessage && (
              <Alert severity="success" className="mt-4">
                {adminMessage}
              </Alert>
            )}

            {userMessage && (
              <Alert severity="info" className="mt-3">
                {userMessage}
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default AdminDashboard;