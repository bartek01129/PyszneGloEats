package com.PyszneGloEats.backend.controller.waiter;

import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.service.waiter.WaiterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/waiter")
public class WaiterController {


    private final WaiterService waiterService;


    @GetMapping("/orders")
    public List<Order> getWaiterOrders() {
        return waiterService.getWaiterOrders();
    }

}
