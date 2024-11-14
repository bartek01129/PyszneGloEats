package com.PyszneGloEats.backend.service.email;

import com.PyszneGloEats.backend.dto.mail.EmailDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class EmailSenderService {


    private final JavaMailSender mailSender;

    public void sendEmail(EmailDTO emailDTO) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("turborower@serwer2492574.home.pl");
        simpleMailMessage.setTo(emailDTO.getToEmail());
        simpleMailMessage.setText(emailDTO.getBody());
        simpleMailMessage.setSubject(emailDTO.getSubject());
        mailSender.send(simpleMailMessage);
        System.out.println("Mail send successfully...");
    }


}
