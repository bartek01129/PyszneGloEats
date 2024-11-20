package com.PyszneGloEats.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter@Setter@ToString
@NoArgsConstructor

@Table(name = "menu_items",uniqueConstraints = @UniqueConstraint(columnNames = "productName"))
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private String description;
    private Double price;

    public MenuItem(String productName, String description, Double price) {
        this.productName = productName;
        this.description = description;
        this.price = price;
    }
}
