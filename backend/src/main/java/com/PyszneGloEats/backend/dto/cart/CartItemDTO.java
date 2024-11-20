package com.PyszneGloEats.backend.dto.cart;

import com.PyszneGloEats.backend.model.MenuItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class CartItemDTO {

    private String name;
    private String productName;
    private String description;
    private Double price;
    private int quantity;


    public CartItemDTO(String name, MenuItem menuItem, int quantity) {
        this.name = name;
        this.productName = menuItem.getProductName();
        this.description = menuItem.getDescription();
        this.price = menuItem.getPrice();
        this.quantity = quantity;
    }


}
