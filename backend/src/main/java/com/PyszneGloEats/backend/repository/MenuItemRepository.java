package com.PyszneGloEats.backend.repository;

import com.PyszneGloEats.backend.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem,Long> {
}
