package com.PyszneGloEats.backend.repository;

import com.PyszneGloEats.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User>findByName(String name);
}
