package com.PyszneGloEats.backend.service.authServices;

import com.PyszneGloEats.backend.dto.UserRegister;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.UserRepository;
import com.PyszneGloEats.backend.service.authServices.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RegisterService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;


    public Optional<String> userLogin(String username, String password){
        Optional<User> user = userRepository.findByName(username);

        if(user.isPresent() && passwordEncoder.matches(password, user.get().getPassword() )) {
            String role = user.get().getRole().name();

            String token = jwtTokenProvider.generateToken(username, role);

            return Optional.of(token);

        } else return Optional.empty();



    }



    public User userRegister(UserRegister userRegister) {
        String password = passwordEncoder.encode(userRegister.getPassword());
        User user = new User(userRegister.getName(), password, User.Role.ROLE_GUEST);
        return userRepository.save(user);
    }
}
