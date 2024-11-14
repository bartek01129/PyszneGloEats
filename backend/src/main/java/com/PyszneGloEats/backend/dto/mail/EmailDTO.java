package com.PyszneGloEats.backend.dto.mail;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class EmailDTO {


    private String toEmail;
    private String subject;
    private String body;

}
