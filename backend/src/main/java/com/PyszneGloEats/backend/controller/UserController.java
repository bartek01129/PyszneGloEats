package com.PyszneGloEats.backend.controller;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.UserService;
import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/getID/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @GetMapping("/getName/{name}")
    public User getUserName(@PathVariable String name) {
        return userService.getUserName(name);
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody UserRegister userRegister) {
        return  userService.userRegister(userRegister);
    }


}
