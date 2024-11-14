package com.PyszneGloEats.backend.service.authServices;

import com.PyszneGloEats.backend.dto.authDTO.LoginDto;
import com.PyszneGloEats.backend.dto.authDTO.RegisterDto;
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


    public Optional<String> userLogin(LoginDto loginDto){
        Optional<User> user = userRepository.findByEmail(loginDto.getEmail());

        if(user.isPresent() && passwordEncoder.matches(loginDto.getPassword(), user.get().getPassword() )) {
            String role = user.get().getRole().name();

            String token = jwtTokenProvider.generateToken(user.get().getName(), role);

            return Optional.of(token);

        } else return Optional.empty();



    }



    public User userRegister(RegisterDto registerDto) {
        String password = passwordEncoder.encode(registerDto.getPassword());
        User user = new User(registerDto.getEmail(),registerDto.getName(), password, User.Role.ROLE_GUEST);
        return userRepository.save(user);
    }
}
