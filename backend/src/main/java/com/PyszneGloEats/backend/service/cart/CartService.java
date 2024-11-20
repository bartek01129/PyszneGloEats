package com.PyszneGloEats.backend.service.cart;

import com.PyszneGloEats.backend.dto.cart.CartItemDTO;
import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.model.Cart;
import com.PyszneGloEats.backend.model.CartItem;
import com.PyszneGloEats.backend.model.MenuItem;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.CartRepository;
import com.PyszneGloEats.backend.repository.MenuItemRepository;
import com.PyszneGloEats.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {

    private final MenuItemRepository menuItemRepository;
    private final UserRepository userRepository;
    private final CartRepository cartRepository;


    public List<CartItemDTO> getCart(String name) {
        User user = userRepository.findByName(name).orElseThrow();
        Cart cart = user.getCart();

        List<CartItemDTO> cartItemsDTO = new ArrayList<>();
        for (CartItem cartItem : cart.getCartItems()) {
            cartItemsDTO.add(new CartItemDTO(name, cartItem.getMenuItem(), cartItem.getQuantity()));
        }
        return cartItemsDTO;
    }

    public DropToCartDTO dropItemToCart(DropToCartDTO dropToCartDTO) {
        User user = userRepository.findByName(dropToCartDTO.getUsername()).orElseThrow();
        Cart cart = user.getCart();
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
            user.setCart(cart);
            cartRepository.save(cart);
        }

        MenuItem menuItem = menuItemRepository.findByProductName(dropToCartDTO.getProductName()).orElseThrow(() -> new NoSuchElementException("Menu item not found"));
        if (dropToCartDTO.getQuantity() <= 0) {
            throw new IllegalArgumentException("Produkt musi mieć ilość większą niż 0");
        }

        Optional<CartItem> existingItem = cart.getCartItems().stream().filter(cartItem -> cartItem.getMenuItem().getProductName().equals(menuItem.getProductName())).findFirst();

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(dropToCartDTO.getQuantity());
        } else {
            CartItem newItem = new CartItem(cart, menuItem, dropToCartDTO.getQuantity());
            cart.getCartItems().add(newItem);
        }

        cartRepository.save(cart);
        userRepository.save(user);

        return new DropToCartDTO(user.getName(), menuItem.getProductName(), dropToCartDTO.getQuantity());
    }


    public CartItemDTO incrementItem(String name, String productName) {
        User user = userRepository.findByName(name).orElseThrow();
        CartItem cartItem = user.getCart().getCartItems().stream().filter(item -> item.getMenuItem().getProductName().equals(productName)).findFirst().orElseThrow();
        cartItem.setQuantity(cartItem.getQuantity() + 1);
        userRepository.save(user);
        return new CartItemDTO(user.getName(), cartItem.getMenuItem().getProductName(), cartItem.getMenuItem().getDescription(), cartItem.getMenuItem().getPrice(), cartItem.getQuantity());
    }

    public CartItemDTO decrementItem(String name, String productName) {
        User user = userRepository.findByName(name).orElseThrow();
        CartItem cartItem = user.getCart().getCartItems().stream().filter(item -> item.getMenuItem().getProductName().equals(productName)).findFirst().orElseThrow();
        if(cartItem.getQuantity() > 0) {
            cartItem.setQuantity(cartItem.getQuantity() - 1);
        }
        userRepository.save(user);
        return new CartItemDTO(user.getName(), cartItem.getMenuItem().getProductName(), cartItem.getMenuItem().getDescription(), cartItem.getMenuItem().getPrice(), cartItem.getQuantity());
    }





}
