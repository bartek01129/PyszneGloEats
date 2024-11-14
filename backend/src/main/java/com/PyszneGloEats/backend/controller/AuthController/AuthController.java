package com.PyszneGloEats.backend.controller.AuthController;

import com.PyszneGloEats.backend.dto.authDTO.AuthDto;
import com.PyszneGloEats.backend.dto.authDTO.LoginDto;
import com.PyszneGloEats.backend.dto.authDTO.RegisterDto;
import com.PyszneGloEats.backend.dto.mail.EmailDTO;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.authServices.RegisterService;
import com.PyszneGloEats.backend.service.email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final RegisterService registerService;
    private final EmailSenderService emailSenderService;

    
    @PostMapping("/register")
    public User registerUser(@RequestBody RegisterDto registerDto) {
        return registerService.userRegister(registerDto);
    }


    @PostMapping("/login")
    public ResponseEntity<AuthDto> userLogin(@RequestBody LoginDto loginDto) {
        Optional<String> token = registerService.userLogin(loginDto);

        if(token.isPresent()) {
            return ResponseEntity.ok(new AuthDto(token.get(),"Login Successfully!"));
        }else {
        return ResponseEntity.status(401).body(new AuthDto(null, "Wrong Password or Username"));
        }

    }

    @PostMapping("/mail")
    public void sendEmail(@RequestBody EmailDTO emailDTO) {
        emailSenderService.sendEmail(emailDTO);
    }




}
