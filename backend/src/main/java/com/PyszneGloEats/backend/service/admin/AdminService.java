package com.PyszneGloEats.backend.service.admin;

import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;



    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User setUsersRole(Long id, String role) {
        User user = userRepository.findById(id).orElseThrow();
        user.setRole(User.Role.valueOf(role));
        return userRepository.save(user);
    }
}
