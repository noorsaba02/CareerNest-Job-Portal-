
package com.example.jobportal.service;

import com.example.jobportal.model.User;
import com.example.jobportal.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // User Registration
    public User registerUser(User user) {

        if (userRepository.existsByEmailIgnoreCase(user.getEmail())) {
            throw new IllegalArgumentException(
                "Email is already registered."
            );
        }

        user.setEmail(user.getEmail().trim().toLowerCase());

        user.setPassword(
            passwordEncoder.encode(user.getPassword())
        );

        String role = user.getRole().trim().toUpperCase();

        if (!role.equals("JOB_SEEKER") && !role.equals("RECRUITER")) {
            throw new IllegalArgumentException("Invalid user role.");
        }

        user.setRole(role);

        return userRepository.save(user);
    }

    // User Login
    public User loginUser(String email, String password) {

        User user = userRepository.findByEmailIgnoreCase(email.trim())
                .orElseThrow(() ->
                    new IllegalArgumentException(
                        "Invalid email or password."
                    )
                );

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException(
                "Invalid email or password."
            );
        }

        return user;
    }
}
