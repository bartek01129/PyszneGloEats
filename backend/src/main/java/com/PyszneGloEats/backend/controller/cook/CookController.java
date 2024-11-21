package com.PyszneGloEats.backend.controller.cook;

import com.PyszneGloEats.backend.model.CartItem;
import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.service.cart.CartService;
import com.PyszneGloEats.backend.service.cook.CookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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





}
