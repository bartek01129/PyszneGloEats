package com.PyszneGloEats.backend.controller.guest;

import com.PyszneGloEats.backend.dto.cart.CartItemDTO;
import com.PyszneGloEats.backend.dto.cart.DetailsDto;
import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.dto.menuItem.UserMenuDTO;
import com.PyszneGloEats.backend.dto.order.PickUpDTO;
import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.service.cart.CartService;
import com.PyszneGloEats.backend.service.guest.GuestService;
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
    private final GuestService guestService;


    @GetMapping("/getAll")
    public List<MenuItem> getAll() {
        return menuItemService.getMenuItems();
    }

    @PutMapping("/addProductsToCart")
    public DropToCartDTO setCart(@RequestBody DropToCartDTO dropToCartDTO) {
        return cartService.dropItemToCart(dropToCartDTO);
    }

    @GetMapping("/getCart/{name}")
    public List<CartItemDTO> getCart(@PathVariable String name) {
        return cartService.getCart(name);
    }

    @GetMapping("/getUsersMenuItems/{name}")
    public List<MenuItem> getUsersItems(@PathVariable String name) {
        return menuItemService.getUsersMenu(name);
    }

    @PutMapping("/removeItemFormCart")
    public List<CartItemDTO> removeItemFromCart(@RequestBody UserMenuDTO userMenuDTO) {
        return cartService.removeItemFormCart(userMenuDTO);
    }

    @GetMapping("/getQuantity/{name}/{productName}")
    public int getQuantity(@PathVariable String name, @PathVariable String productName) {
        return menuItemService.getQuantity(name, productName);
    }
    
    
    
    @PostMapping("/createOrder/{name}")
    public Order createOrder(@PathVariable String name) {
        return cartService.createOrder(name);
    }

    @GetMapping("/order/details/{name}")
    public DetailsDto getOrderDetails(@PathVariable String name) {
        return cartService.getOrdersDetails(name);
    }

    @GetMapping("/order/orders/{name}")
    public List<Order> getUserOrders(@PathVariable String name) {
        return guestService.getUserOrderList(name);
    }


    @PostMapping("/order/pickup")
    public Order pickUpOrder(@RequestBody PickUpDTO pickUpDTO) {
        return guestService.pickUpOrder(pickUpDTO);
    }
}
