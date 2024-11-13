package com.PyszneGloEats.backend.controller.admin;


import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.admin.AdminService;
import com.PyszneGloEats.backend.service.email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    private final EmailSenderService emailSenderService;

    @GetMapping("/getUsers")
    public List<User> getUsers() {
        return adminService.getUsers();
    }
    @PutMapping("/update/{id}/{role}")
    public User setUsersRole(@PathVariable Long id, @PathVariable String role) {
        return adminService.setUsersRole(id, role);
    }

    @PostMapping("/mail/{toEmail}/{subject}/{body}")
    public void sendEmail(@PathVariable String toEmail, @PathVariable String subject, @PathVariable String body) {
        emailSenderService.sendEmail(toEmail,subject,body);
    }

}
