package com.PyszneGloEats.backend.repository;

import com.PyszneGloEats.backend.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
}
