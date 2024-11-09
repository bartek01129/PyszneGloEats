package com.PyszneGloEats.backend.controller.AuthController;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.authServices.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final RegisterService registerService;
    
    @PostMapping("/register")
    public User registerUser(@RequestBody UserRegister userRegister) {
        return registerService.userRegister(userRegister);
    }


}
