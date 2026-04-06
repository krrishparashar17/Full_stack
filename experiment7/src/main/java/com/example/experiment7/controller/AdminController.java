package com.example.experiment7.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @GetMapping("/api/admin/dashboard")
    public Map<String, String> dashboard() {
        return Map.of("message", "Welcome, admin");
    }
}