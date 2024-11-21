package com.PyszneGloEats.backend.service.menuItme;

import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.dto.menuItem.MenuItemDTO;
import com.PyszneGloEats.backend.dto.menuItem.UserMenuDTO;
import com.PyszneGloEats.backend.model.Cart;
import com.PyszneGloEats.backend.model.CartItem;
import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.MenuItemRepository;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;
    private final UserRepository userRepository;


    public MenuItem setMenuItem(MenuItemDTO menuItemDTO) {
        MenuItem menuItem = new MenuItem(menuItemDTO.getProductName(),menuItemDTO.getDescription(),menuItemDTO.getPrice());
        menuItemRepository.save(menuItem);
        return menuItem;
    }

    public List<MenuItem> getMenuItems() {
        return menuItemRepository.findAll();
    }

    public List<MenuItem> getUsersMenu(String name) {
        User user = userRepository.findByName(name).orElseThrow();
        List<MenuItem> userMenu = user.getMenuItems();
        return userMenu;
    }


    public User addItemToUser(UserMenuDTO userMenuDTO) {
        User user = userRepository.findByName(userMenuDTO.getUsername()).orElseThrow();
        MenuItem menuItem = menuItemRepository.findByProductName(userMenuDTO.getProductName()).orElseThrow();

        List<MenuItem> userMenu = user.getMenuItems();
        userMenu.add(menuItem);

        return userRepository.save(user);

    }


    public int getQuantity(String name, String productName) {
        User user = userRepository.findByName(name).orElseThrow();

        return user.getCart().getCartItems().stream()
                .filter(item -> item.getMenuItem().getProductName().equals(productName))
                .findFirst()
                .map(CartItem::getQuantity)
                .orElse(0);
    }







}
