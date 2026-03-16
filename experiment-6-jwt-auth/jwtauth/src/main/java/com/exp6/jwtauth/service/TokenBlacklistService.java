package com.exp6.jwtauth.service;

import com.exp6.jwtauth.models.BlacklistedToken;
import com.exp6.jwtauth.repository.BlacklistedTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenBlacklistService {

    @Autowired
    private BlacklistedTokenRepository blacklistedTokenRepository;

    public void blacklistToken(String token) {
        if (!blacklistedTokenRepository.existsByToken(token)) {
            blacklistedTokenRepository.save(new BlacklistedToken(token));
        }
    }

    public boolean isBlacklisted(String token) {
        return blacklistedTokenRepository.existsByToken(token);
    }
}