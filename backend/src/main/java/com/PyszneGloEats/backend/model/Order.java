package com.PyszneGloEats.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<CartItem> cartItems = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Status status;


    public Order(List<CartItem> cartItems, Status status) {
        this.cartItems = cartItems;
        this.status = status;
    }

    public enum Status {
        PLACED, IN_PROGRESS, COMPLETED, CANCELLED, PICKED_UP
    }


}
