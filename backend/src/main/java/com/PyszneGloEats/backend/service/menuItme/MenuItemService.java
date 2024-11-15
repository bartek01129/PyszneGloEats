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


    public MenuItem setMenuItem(MenuItemDTO menuItemDTO) {
        MenuItem menuItem = new MenuItem(menuItemDTO.getProductName(),menuItemDTO.getDescription(),menuItemDTO.getPrice());
        menuItemRepository.save(menuItem);
        return menuItem;
    }

    public List<MenuItem> getMenuItems() {
        return menuItemRepository.findAll();
    }




}
