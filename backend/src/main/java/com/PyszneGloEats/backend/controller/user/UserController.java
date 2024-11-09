package com.PyszneGloEats.backend.controller.user;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.UserService;
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
    //Test git

    @GetMapping("/getName/{name}")
    public User getUserName(@PathVariable String name) {
        return userService.getUserName(name);
    }

//    @PostMapping("/register")
//    public User registerUser(@RequestBody UserRegister userRegister) {
//        return  userService.userRegister(userRegister);
//    }


}
