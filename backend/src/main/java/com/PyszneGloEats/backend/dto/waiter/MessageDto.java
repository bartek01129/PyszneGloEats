package com.PyszneGloEats.backend.dto.waiter;


import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {

    private String username;
    private int pickUpCode;
    private String message;

}
