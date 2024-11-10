package com.PyszneGloEats.backend.controller.AuthController;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.dto.authDTO.AuthDto;
import com.PyszneGloEats.backend.dto.authDTO.LoginDto;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.authServices.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final RegisterService registerService;
    
    @PostMapping("/register")
    public User registerUser(@RequestBody UserRegister userRegister) {
        return registerService.userRegister(userRegister);
    }


    @PostMapping("/login")
    public ResponseEntity<AuthDto> userLogin(@RequestBody LoginDto loginDto) {
        Optional<String> token = registerService.userLogin(loginDto.getUsername(),loginDto.getPassword());

        if(token.isPresent()) {
            return ResponseEntity.ok(new AuthDto(token.get(),"Login Successfully!"));
        }else {
        return ResponseEntity.status(401).body(new AuthDto(null, "Wrong Password or Username"));
        }

    }


}
