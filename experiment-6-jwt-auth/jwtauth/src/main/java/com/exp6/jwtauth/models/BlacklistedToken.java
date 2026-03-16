package com.exp6.jwtauth.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "blacklisted_tokens")
public class BlacklistedToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 1000, unique = true)
    private String token;

    public BlacklistedToken() {
    }

    public BlacklistedToken(String token) {
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public String getToken() {
        return token;
    }
}