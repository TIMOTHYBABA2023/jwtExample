package com.timtrixz.jwtExample.exceptions;

public class RoleNotFoundException extends Exception{
    public RoleNotFoundException(String message) {
        super(message);
    }
}