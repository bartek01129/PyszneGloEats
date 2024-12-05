package com.PyszneGloEats.backend.service.cook;

import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.OrderRepository;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CookService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;


    public List<Order> getOrders() {

        List<Order> orderList = orderRepository.findAll();
        List<Order> cookOrders = new ArrayList<>();

        for (Order order : orderList) {
            if (order.getStatus().equals(Order.Status.PLACED)) {
                cookOrders.add(order);
            }
        }
        return cookOrders;
    }

    public Order setOrderToCook(String cookName, Long id) {

        User user = userRepository.findByName(cookName).orElseThrow();
        Order order = orderRepository.findById(id).orElseThrow();

        if (order.getStatus() != Order.Status.CANCELLED) {
            order.setCook(user);
            order.setStatus(Order.Status.IN_PROGRESS);

            orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("Nie możesz przyjąć anulowanego zamówienia");
        }


        return order;
    }


    public List<Order> getCookOrders(String username) {
        List<Order> orders = new ArrayList<>();
        List<Order> cookOrders = orderRepository.findAll();

        for (Order order : cookOrders) {
            if (order.getCook() != null && order.getCook().getName().equals(username)) {
                System.out.println("order: " + order);
                orders.add(order);
            }
        }
        return orders;
    }


    public Order removeFormCook(Long id) {
        Order order = orderRepository.findById(id).orElseThrow();

        order.setCook(null);
        order.setStatus(Order.Status.PLACED);

        orderRepository.save(order);

        return order;
    }

    public Order deleteOrder(Long id) {
        Order order = orderRepository.findById(id).orElseThrow();

        order.setStatus(Order.Status.CANCELLED);

        orderRepository.save(order);
        return order;
    }


    public Order completeOrder(Long id) {
        Order order = orderRepository.findById(id).orElseThrow();

        order.setStatus(Order.Status.COMPLETED);

        orderRepository.save(order);

        return order;
    }


}
