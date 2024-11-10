package com.PyszneGloEats.backend.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter@Setter@ToString
@NoArgsConstructor
@Table(name = "users",uniqueConstraints = @UniqueConstraint(columnNames = "name"))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role = Role.ROLE_GUEST;

    public User(String name, String password, Role role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }

    public enum Role {
        ROLE_GUEST,
        ROLE_COOK,
        ROLE_ADMIN
    }


}
