package com.PyszneGloEats.backend.service.cart;

import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.model.Cart;
import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.MenuItemRepository;
import com.PyszneGloEats.backend.repository.UserRepository;
import jdk.jfr.Registered;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final MenuItemRepository menuItemRepository;
    private final UserRepository userRepository;



    public Cart getCart(String name) {
        User user = userRepository.findByName(name).orElseThrow();
        Cart cart = user.getCart();
        return cart;
    }

    public DropToCartDTO dropItemToCart(DropToCartDTO dropToCartDTO) {
        User user = userRepository.findByName(dropToCartDTO.getUsername()).orElseThrow();
        Cart cart = user.getCart();
        MenuItem menuItem = menuItemRepository.findByProductName(dropToCartDTO.getProductName()).orElseThrow();
        List<MenuItem> menuItems = cart.getMenuItems();
        menuItems.add(menuItem);
        cart.setMenuItems(menuItems);
        userRepository.save(user);
        return new DropToCartDTO(user.getName(),menuItem.getProductName());
    }


}
