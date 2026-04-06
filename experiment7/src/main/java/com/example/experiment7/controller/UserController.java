package com.example.experiment7.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/api/user/profile")
    public Map<String, String> profile() {
        return Map.of("message", "Welcome, authenticated user");
    }
}