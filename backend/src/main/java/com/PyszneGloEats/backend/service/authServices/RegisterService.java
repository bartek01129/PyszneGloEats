package com.PyszneGloEats.backend.service.authServices;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;


    public User userRegister(UserRegister userRegister) {
        String password = passwordEncoder.encode(userRegister.getPassword());
        User user = new User(userRegister.getName(), password, User.Role.ROLE_GUEST);
        return userRepository.save(user);
    }
}
