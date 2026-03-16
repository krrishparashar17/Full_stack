package com.exp6.jwtauth.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProtectedController {

    @GetMapping("/api/protected")
    public String protectedRoute() {
        return "Access granted! You are viewing a protected route using a valid JWT token.";
    }
}