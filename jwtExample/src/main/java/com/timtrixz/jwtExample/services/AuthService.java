package com.timtrixz.jwtExample.services;

import com.timtrixz.jwtExample.dtos.ApiResponseDto;
import com.timtrixz.jwtExample.dtos.SignInRequestDto;
import com.timtrixz.jwtExample.dtos.SignUpRequestDto;
import com.timtrixz.jwtExample.exceptions.RoleNotFoundException;
import com.timtrixz.jwtExample.exceptions.UserAlreadyExistsException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    ResponseEntity<ApiResponseDto<?>> signUpUser(SignUpRequestDto signUpRequestDto) throws UserAlreadyExistsException, RoleNotFoundException;
    ResponseEntity<ApiResponseDto<?>> signInUser(SignInRequestDto signInRequestDto);

}