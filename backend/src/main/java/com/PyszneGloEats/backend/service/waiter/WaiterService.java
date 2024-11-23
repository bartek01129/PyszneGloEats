package com.PyszneGloEats.backend.service.waiter;

import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.repository.OrderRepository;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WaiterService {
    
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;


    public List<Order> getWaiterOrders() {
        List<Order> orders = new ArrayList<>();
        List<Order> waiterOrders = orderRepository.findAll();

        for (Order order : waiterOrders) {
            if(order.getStatus() == Order.Status.COMPLETED) {
                orders.add(order);
            }
        }
        return orders;
    }

}
