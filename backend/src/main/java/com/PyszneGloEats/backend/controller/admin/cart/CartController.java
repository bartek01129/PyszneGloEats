package com.PyszneGloEats.backend.controller.admin.cart;

import com.PyszneGloEats.backend.dto.cart.CartItemDTO;
import com.PyszneGloEats.backend.model.CartItem;
import com.PyszneGloEats.backend.service.cart.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/admin/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PutMapping("increment/{name}/{productName}")
    public CartItemDTO incrementItem(@PathVariable String name, @PathVariable String productName) {
        return cartService.incrementItem(name, productName);
    }

    @PutMapping("decrement/{name}/{productName}")
    public CartItemDTO decrementItem(@PathVariable String name, @PathVariable String productName) {
        return cartService.decrementItem(name, productName);
    }
}
