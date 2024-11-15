package com.PyszneGloEats.backend.dto.menuItem;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class DropToCartDTO {

    private String productName;
    private String username;

}
