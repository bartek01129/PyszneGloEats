package com.PyszneGloEats.backend.dto.order;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PickUpDTO {
    
    private Long id;
    private int pickUpCode;
}
