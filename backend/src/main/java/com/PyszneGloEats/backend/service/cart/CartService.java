package com.PyszneGloEats.backend.service.cart;

import com.PyszneGloEats.backend.dto.cart.CartItemDTO;
import com.PyszneGloEats.backend.dto.cart.DetailsDto;
import com.PyszneGloEats.backend.dto.menuItem.DropToCartDTO;
import com.PyszneGloEats.backend.dto.menuItem.UserMenuDTO;
import com.PyszneGloEats.backend.model.*;
import com.PyszneGloEats.backend.repository.*;
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
    private final CartRepository cartRepository;
    private final OrderRepository orderRepository;
    private final CartItemRepository cartItemRepository;


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

        MenuItem menuItem = menuItemRepository.findByProductName(dropToCartDTO.getProductName()).orElseThrow();
        if (dropToCartDTO.getQuantity() <= 0) {
            throw new IllegalArgumentException("Produkt musi mieć ilość większą niż 0");
        }

        Optional<CartItem> existingItem = cart.getCartItems().stream().filter(cartItem -> cartItem.getMenuItem().getProductName().equals(menuItem.getProductName())).findFirst();

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + dropToCartDTO.getQuantity());
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
        if (cartItem.getQuantity() > 0) {
            cartItem.setQuantity(cartItem.getQuantity() - 1);
        }
        userRepository.save(user);
        return new CartItemDTO(user.getName(), cartItem.getMenuItem().getProductName(), cartItem.getMenuItem().getDescription(), cartItem.getMenuItem().getPrice(), cartItem.getQuantity());
    }


    public List<CartItemDTO> removeItemFormCart(UserMenuDTO userMenuDTO) {
        User user = userRepository.findByName(userMenuDTO.getUsername()).orElseThrow();
        Cart cart = user.getCart();

        Optional<CartItem> cartItemToRemove = cart.getCartItems().stream().filter(cartItem -> cartItem.getMenuItem().getProductName().equals(userMenuDTO.getProductName())).findFirst();

        if (cartItemToRemove.isPresent()) {
            cart.getCartItems().remove(cartItemToRemove.get());
        } else {
            throw new IllegalArgumentException("Item not found in cart");
        }

        cartRepository.save(cart);
        userRepository.save(user);

        List<CartItemDTO> cartItemsDTO = new ArrayList<>();
        for (CartItem cartItem : cart.getCartItems()) {
            cartItemsDTO.add(new CartItemDTO(userMenuDTO.getUsername(), cartItem.getMenuItem(), cartItem.getQuantity()));
        }
        return cartItemsDTO;
    }

    public List<CartItem> getItemsFormCart(String name) {
        User user = userRepository.findByName(name).orElseThrow();
        Cart cart = user.getCart();


        return new ArrayList<>(cart.getCartItems());
    }


    public Order createOrder(String name) {
        User user = userRepository.findByName(name).orElseThrow();

        Cart cart = user.getCart();

        List<CartItem> cartItems = new ArrayList<>();
        for (CartItem originalItem : cart.getCartItems()) {
            CartItem newItem = new CartItem();
            newItem.setMenuItem(originalItem.getMenuItem());
            newItem.setQuantity(originalItem.getQuantity());
            newItem.setCart(null);
            cartItems.add(newItem);
        }

        Order order = new Order(cartItems, Order.Status.PLACED);

        order.setUser(user);

        for (CartItem item : cartItems) {
            item.setOrder(order);

        }
        if (!cart.getCartItems().isEmpty()) {
            orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("Cart is empty");
        }

        cart.getCartItems().removeAll(cart.getCartItems());

        cartRepository.save(cart);
        System.out.println(cart.getCartItems().size() + " size");
        return order;

    }

    public DetailsDto getOrdersDetails(String name) {
        List<CartItem> items = getItemsFormCart(name);
        DetailsDto detailsDto = new DetailsDto();

        double price = 0;
        int product = 0;
        for (CartItem item : items) {
            price += item.getMenuItem().getPrice();
            product += item.getQuantity();

        }
        price = Math.floor(price * 100) / 100;

        detailsDto.setTotalPrice(price);
        detailsDto.setTotalQuantity(product);
        return detailsDto;

    }


}
