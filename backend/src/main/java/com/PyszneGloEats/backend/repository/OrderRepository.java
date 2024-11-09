package com.PyszneGloEats.backend.repository;

import com.PyszneGloEats.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {
}
