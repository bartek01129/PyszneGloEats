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
import java.util.Optional;

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
        Optional<MenuItem> existingItem = menuItems.stream().filter(item -> item.getProductName().equals(menuItem.getProductName())).findFirst();

        if(menuItem.getQuantity() > 0) {
            if(existingItem.isPresent()) {
                MenuItem item = existingItem.get();
                item.setQuantity(item.getQuantity() + menuItem.getQuantity());
            } else {
                menuItems.add(menuItem);
            }
        } else  {
            System.out.println("produkt musi być większy do 0");
        }


        cart.setMenuItems(menuItems);
        userRepository.save(user);

        return new DropToCartDTO(user.getName(),menuItem.getProductName());
    }



    public Cart deleteItem(DropToCartDTO dropToCartDTO) {
        User user = userRepository.findByName(dropToCartDTO.getUsername()).orElseThrow();
        Cart cart = user.getCart();
        List<MenuItem> menuItems = cart.getMenuItems();
        menuItems.removeIf(menuItem -> menuItem.getProductName().equals(dropToCartDTO.getProductName()));
        cart.setMenuItems(menuItems);
        userRepository.save(user);
        return cart;
    }


}
