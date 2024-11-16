package com.PyszneGloEats.backend.service.menuItme;

import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.dto.menuItem.MenuItemDTO;
import com.PyszneGloEats.backend.model.Cart;
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
        MenuItem menuItem = new MenuItem(menuItemDTO.getProductName(),menuItemDTO.getDescription(),menuItemDTO.getPrice(),menuItemDTO.getQuantity());
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


    public MenuItem incrementMenuItem(String name) {
        MenuItem menuItem = menuItemRepository.findByProductName(name).orElseThrow();
        menuItem.setQuantity(menuItem.getQuantity() + 1);
        menuItemRepository.save(menuItem);
        return menuItem;
    }


    public MenuItem decrementMenuItem(String name) {
        MenuItem menuItem = menuItemRepository.findByProductName(name).orElseThrow();
        if (menuItem.getQuantity() > 0) {
            menuItem.setQuantity(menuItem.getQuantity() - 1);
        }
        menuItemRepository.save(menuItem);
        return menuItem;
    }

    public User addItemToUser(DropToCartDTO dropToCartDTO) {
        User user = userRepository.findByName(dropToCartDTO.getUsername()).orElseThrow();
        MenuItem menuItem = menuItemRepository.findByProductName(dropToCartDTO.getProductName()).orElseThrow();

        List<MenuItem> userMenu = user.getMenuItems();
        userMenu.add(menuItem);

        return userRepository.save(user);

    }







}
