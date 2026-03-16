package com.exp6.jwtauth.controllers;

import com.exp6.jwtauth.dto.LoginRequest;
import com.exp6.jwtauth.dto.LoginResponse;
import com.exp6.jwtauth.dto.LogoutResponse;
import com.exp6.jwtauth.service.TokenBlacklistService;
import com.exp6.jwtauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private TokenBlacklistService tokenBlacklistService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );

            String token = jwtUtil.generateToken(loginRequest.getUsername());
            return ResponseEntity.ok(new LoginResponse("Login successful", token));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            tokenBlacklistService.blacklistToken(token);
            return ResponseEntity.ok(new LogoutResponse("Logout successful. Token invalidated."));
        }

        return ResponseEntity.badRequest().body("Token not provided");
    }
}