package com.PyszneGloEats.backend.dto.authDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter@Setter@ToString
@AllArgsConstructor
public class PasswordRestartDTO {

    private String name;
    private String token;
    private String newPassword;
    private LocalDateTime localDateTime;

    
}
