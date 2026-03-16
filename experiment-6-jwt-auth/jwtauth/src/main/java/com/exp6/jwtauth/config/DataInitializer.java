package com.exp6.jwtauth.config;

import com.exp6.jwtauth.models.User;
import com.exp6.jwtauth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (userRepository.findByUsername("user123").isEmpty()) {
            User user = new User(
                    "user123",
                    passwordEncoder.encode("password123"),
                    "USER"
            );
            userRepository.save(user);
            System.out.println("Default user created: user123 / password123");
        }
    }
}