package com.PyszneGloEats.backend.service.authServices;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
@RequiredArgsConstructor
public class RegisterService {


    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;


      public User userRegister(UserRegister userRegister) {
         User user = new User(userRegister.getName(),userRegister.getPassword(), User.Role.ROLE_GUEST);
         return userRepository.save(user);
        }
}
