package com.timtrixz.jwtExample.controllers;

import com.timtrixz.jwtExample.dtos.ApiResponseDto;
import com.timtrixz.jwtExample.dtos.SignInRequestDto;
import com.timtrixz.jwtExample.dtos.SignUpRequestDto;
import com.timtrixz.jwtExample.exceptions.RoleNotFoundException;
import com.timtrixz.jwtExample.exceptions.UserAlreadyExistsException;
import com.timtrixz.jwtExample.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto<?>> registerUser(@RequestBody @Valid SignUpRequestDto signUpRequestDto)
            throws UserAlreadyExistsException, RoleNotFoundException {
        return authService.signUpUser(signUpRequestDto);
    }

    @PostMapping("/signin")
    public ResponseEntity<ApiResponseDto<?>> signInUser(@RequestBody @Valid SignInRequestDto signInRequestDto){
        return authService.signInUser(signInRequestDto);
    }

}