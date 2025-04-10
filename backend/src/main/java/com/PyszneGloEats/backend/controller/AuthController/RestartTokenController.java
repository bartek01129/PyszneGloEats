package com.PyszneGloEats.backend.controller.AuthController;

import com.PyszneGloEats.backend.dto.authDTO.PasswordTokenResponseDTO;
import com.PyszneGloEats.backend.service.authServices.passwordRestart.PasswordTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")

public class RestartTokenController {

    private final PasswordTokenService passwordRestartTokenService;

    @PostMapping("/restartPasswordMail")
    public PasswordTokenResponseDTO restartPasswordMail(@RequestParam String email) {
        return passwordRestartTokenService.resetPassword(email);
    }


}
