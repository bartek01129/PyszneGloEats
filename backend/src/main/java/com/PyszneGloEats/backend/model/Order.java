package com.PyszneGloEats.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @JsonIgnoreProperties({"order", "cart"})
    private List<CartItem> cartItems = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Status status;
    private int pickUpCode;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"orders", "cart", "menuItems", "password","passwordResetToken", "expiryDate", "email", "role" })
    private User user;

    @ManyToOne
    @JoinColumn(name = "cook_id")
    @JsonIgnoreProperties({"orders", "cart", "menuItems", "password","passwordResetToken", "expiryDate", "email", "role" })
    private User cook;

    public Order(List<CartItem> cartItems, Status status) {
        this.cartItems = cartItems;
        this.status = status;
    }

    public enum Status {
        PLACED, IN_PROGRESS, COMPLETED, CANCELLED, PICKED_UP, READY
    }


}
