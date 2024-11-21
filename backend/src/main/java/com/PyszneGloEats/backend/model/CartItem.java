package com.PyszneGloEats.backend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

@Table(name = "cart_items")
public class CartItem {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    @JsonIgnore
    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    @JsonIgnoreProperties("users")
    private MenuItem menuItem;

    @Column(nullable = false, columnDefinition = "INT DEFAULT 1")
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnoreProperties({"cartItems", "user"})
    private Order order;

    public CartItem(Cart cart, MenuItem menuItem, int quantity) {
        this.cart = cart;
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
}
