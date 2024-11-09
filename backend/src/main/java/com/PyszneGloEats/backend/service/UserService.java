package com.PyszneGloEats.backend.service;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User getUser(Long ID) {
        return userRepository.findById(ID).orElseThrow();
    }


    public User getUserName(String name) {
        return userRepository.findByName(name).orElseThrow();
    }

}
