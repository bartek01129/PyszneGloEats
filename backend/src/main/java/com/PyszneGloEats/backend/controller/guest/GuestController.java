package com.PyszneGloEats.backend.controller.guest;

import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.model.Cart;
import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.service.cart.CartService;
import com.PyszneGloEats.backend.service.menuItme.MenuItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/guest")
public class GuestController {

    private final MenuItemService menuItemService;
    private final CartService cartService;


    @GetMapping("/getAll")
    public List<MenuItem> getAll() {
        return menuItemService.getMenuItems();
    }

    @PutMapping("/addProducts")
    public DropToCartDTO setCart(@RequestBody DropToCartDTO dropToCartDTO) {
        return cartService.dropItemToCart(dropToCartDTO);
    }


    @GetMapping("/getCart/{name}")
    public Cart getCart(@PathVariable String name) {
        return cartService.getCart(name);
    }


    @PutMapping("/deleteFromCart")
    public Cart deleteFromCart(@RequestBody DropToCartDTO dropToCartDTO) {
        return cartService.deleteItem(dropToCartDTO);
    }

    @PutMapping("/incrementItem/{name}")
    public MenuItem incrementItem(@PathVariable String name) {
        return menuItemService.incrementMenuItem(name);
    }

    @PutMapping("/decrementItem/{name}")
    public MenuItem decrementItem(@PathVariable String name) {
        return menuItemService.decrementMenuItem(name);
    }

    @GetMapping("/getUsersMenuItems/{name}")
    public List<MenuItem> getUsersItems(@PathVariable String name) {
        return menuItemService.getUsersMenu(name);
    }

}
