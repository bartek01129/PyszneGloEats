package com.PyszneGloEats.backend.controller.admin;


import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/getUsers")
    public List<User> getUsers() {
        return adminService.getUsers();
    }
    @PutMapping("/update/{id}/{role}")
    public User setUsersRole(@PathVariable Long id, @PathVariable String role) {
        return adminService.setUsersRole(id, role);
    }

}
