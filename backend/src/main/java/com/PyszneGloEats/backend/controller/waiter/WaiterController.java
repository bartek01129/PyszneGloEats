package com.PyszneGloEats.backend.controller.waiter;

import com.PyszneGloEats.backend.dto.waiter.MessageDto;
import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.service.waiter.WaiterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/prepareOrder/{id}")
    public MessageDto generatePickUpCode(@PathVariable Long id) {
        return waiterService.generatePickUpCode(id);
    }

}
