package com.example.experiment7.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {

    @GetMapping("/api/public/hello")
    public Map<String, String> hello() {
        return Map.of("message", "This is a public endpoint");
    }
}