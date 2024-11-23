package com.PyszneGloEats.backend.controller.cook;

import com.PyszneGloEats.backend.model.CartItem;
import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.service.cart.CartService;
import com.PyszneGloEats.backend.service.cook.CookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cook")
public class CookController {



    private final CartService cartService;
    private final CookService cookService;

    @GetMapping("/getItems/{name}")
    public List<CartItem> getItemsFormUsersCart(@PathVariable String name) {
        return cartService.getItemsFormCart(name);
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return cookService.getOrders();
    }


    @PutMapping("/order/assign/{cookName}/{id}")
    public Order assignOrder(@PathVariable String cookName, @PathVariable Long id) {
        return cookService.setOrderToCook(cookName, id);
    }

    @GetMapping("/cookOrders/{username}")
    public List<Order> getAssignedOrders(@PathVariable String username) {
        return cookService.getCookOrders(username);
    }



    @PutMapping("/order/remove/{id}")
    public Order removeOrderFromCook(@PathVariable Long id) {
        return cookService.removeFormCook(id);
    }

    @PutMapping("/order/delete/{id}")
    public Order deleteOrder(@PathVariable Long id) {
        return cookService.deleteOrder(id);
    }

    @PutMapping("/order/complete/{id}")
    public Order completeOrder(@PathVariable Long id) {
        return cookService.completeOrder(id);
    }



}
