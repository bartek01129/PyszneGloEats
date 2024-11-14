package com.PyszneGloEats.backend.service.authServices.passwordRestart;


import com.PyszneGloEats.backend.dto.authDTO.PasswordTokenResponseDTO;
import com.PyszneGloEats.backend.dto.mail.EmailDTO;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import com.PyszneGloEats.backend.service.email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PasswordTokenService {


    private final UserRepository userRepository;
    private final EmailSenderService emailSenderService;

    public PasswordTokenResponseDTO resetPassword(String email) {
        String token = UUID.randomUUID().toString();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(15);
        User user = userRepository.findByEmail(email).orElseThrow();
        user.setPasswordResetToken(token);
        user.setExpiryDate(expiry);
        userRepository.save(user);
        String body = "To jest twój kod do zmiany hasła, aktywny będzie przez 15 minut: ";
        emailSenderService.sendEmail(new EmailDTO(user.getEmail(), "Zmiana hasła", body + token));
        return new PasswordTokenResponseDTO(token,expiry);
    }


}
