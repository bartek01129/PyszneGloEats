package com.PyszneGloEats.backend.controller.AuthController;

import com.PyszneGloEats.backend.dto.authDTO.PasswordRestartDTO;
import com.PyszneGloEats.backend.service.authServices.passwordRestart.PasswordRestartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class PasswordRestartController {

    private final PasswordRestartService passwordRestartService;


    @PostMapping("/restartPassword")
    public PasswordRestartDTO restartPassword(@RequestBody PasswordRestartDTO passwordRestartDTO) {
        return passwordRestartService.restartPassword(passwordRestartDTO);
    }

}
