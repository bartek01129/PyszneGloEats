package com.PyszneGloEats.backend.service.authServices.passwordRestart;

import com.PyszneGloEats.backend.dto.authDTO.PasswordRestartDTO;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PasswordRestartService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;


    public PasswordRestartDTO restartPassword(PasswordRestartDTO passwordRestartDTO) {
        User user = userRepository.findByName(passwordRestartDTO.getName()).orElseThrow();
        LocalDateTime localDateTime = LocalDateTime.now();


        if (localDateTime.isBefore(user.getExpiryDate()) && user.getPasswordResetToken().equals(passwordRestartDTO.getToken())) {
            user.setPassword(passwordEncoder.encode(passwordRestartDTO.getNewPassword()));
            userRepository.save(user);
            return new PasswordRestartDTO(user.getName(), user.getEmail(), user.getPassword(), localDateTime);
        }
        
        return new PasswordRestartDTO(null, null, null, null);
    }


}
