package com.PyszneGloEats.backend.controller.admin.menuItem;

import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.dto.menuItem.MenuItemDTO;
import com.PyszneGloEats.backend.dto.menuItem.UserMenuDTO;
import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.service.menuItme.MenuItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/menuItem")
@RequiredArgsConstructor
public class MenuItemController {

    private final MenuItemService menuItemService;

    @PostMapping("/set")
    public MenuItem setMenuItem(@RequestBody MenuItemDTO menuItemDTO) {
        return menuItemService.setMenuItem(menuItemDTO);
    }


    @PostMapping("/setToUser")
    public User addItemToUser(UserMenuDTO userMenuDTO) {
        return menuItemService.addItemToUser(userMenuDTO);
    }





}
