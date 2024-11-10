package com.PyszneGloEats.backend.dto;

import com.PyszneGloEats.backend.model.User;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter@Setter@ToString
public class UserRegister {
    private String name;
    private String password;
}
