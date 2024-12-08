package com.PyszneGloEats.backend.service.guest;


import com.PyszneGloEats.backend.dto.order.PickUpDTO;
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
public class GuestService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;




    public List<Order> getUserOrderList(String name) {
        List<Order> orderList = orderRepository.findAll();
        List<Order> orderUserList = new ArrayList<>();
        User user = userRepository.findByName(name).orElseThrow();

        for(Order order : orderList) {
            if(order.getUser().equals(user)) {
                orderUserList.add(order);
            }
        }

        return orderUserList;
    }
    
    
    public Order pickUpOrder(PickUpDTO pickUpDTO) {
        Order order = orderRepository.findById(pickUpDTO.getId()).orElseThrow();
        
        if(order.getPickUpCode() == pickUpDTO.getPickUpCode()) {
            order.setStatus(Order.Status.PICKED_UP);
        }
        return orderRepository.save(order);
    }


}
