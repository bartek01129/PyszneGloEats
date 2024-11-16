package com.PyszneGloEats.backend.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter@Setter@ToString(exclude = {"cart", "menuItems"})
@NoArgsConstructor
@Table(name = "users",uniqueConstraints = @UniqueConstraint(columnNames = {"name", "email"}))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String email;
    private String name;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role = Role.ROLE_GUEST;
    private String passwordResetToken;
    private LocalDateTime expiryDate;

    public User(String email,String name, String password, Role role) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.role = role;
    }

    @OneToOne(mappedBy = "user")
    private Cart cart;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Order> orders;

    @ManyToMany
    @JoinTable(name = "users_menu_items")
    private List<MenuItem> menuItems;

    public enum Role {
        ROLE_GUEST,
        ROLE_COOK,
        ROLE_ADMIN
    }


}
