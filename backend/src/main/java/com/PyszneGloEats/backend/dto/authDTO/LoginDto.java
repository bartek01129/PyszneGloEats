package com.PyszneGloEats.backend.dto.authDTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter@Setter@ToString
public class LoginDto {
    
    private String email;
    private String password;
}
