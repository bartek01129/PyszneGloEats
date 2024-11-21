package com.PyszneGloEats.backend.service.cook;

import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CookService {

    private final OrderRepository orderRepository;
 
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }


 
}
