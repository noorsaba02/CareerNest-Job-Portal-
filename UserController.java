
package com.example.jobportal.controller;

import com.example.jobportal.model.User;
import com.example.jobportal.model.LoginRequest;
import com.example.jobportal.model.LoginResponse;
import com.example.jobportal.service.UserService;
import com.example.jobportal.security.JwtService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    public UserController(
            UserService userService,
            JwtService jwtService) {

        this.userService = userService;
        this.jwtService = jwtService;
    }

    // User Registration
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public User registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    // User Login
    @PostMapping("/login")
    public LoginResponse loginUser(
            @Valid @RequestBody LoginRequest request) {

        User user = userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}
