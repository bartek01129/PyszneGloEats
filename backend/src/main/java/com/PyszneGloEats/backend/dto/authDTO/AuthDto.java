package com.PyszneGloEats.backend.dto.authDTO;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class AuthDto {
    String token;
    String message;
}
