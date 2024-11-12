package com.PyszneGloEats.backend.controller.guest;

import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.service.menuItme.MenuItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/guest")
public class GuestController {

    private final MenuItemService menuItemService;

    @GetMapping("/getAll")
    public List<MenuItem> getAll() {
        return menuItemService.getMenuItems();
    }


}
