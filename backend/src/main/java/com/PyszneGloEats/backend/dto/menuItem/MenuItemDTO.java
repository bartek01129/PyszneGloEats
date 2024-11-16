package com.PyszneGloEats.backend.dto.menuItem;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MenuItemDTO {

    private String productName;
    private String description;
    private Double price;
    private int quantity;
}
