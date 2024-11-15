package com.PyszneGloEats.backend.repository;

import com.PyszneGloEats.backend.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem,Long> {
    Optional<MenuItem> findByProductName(String productName);
}
