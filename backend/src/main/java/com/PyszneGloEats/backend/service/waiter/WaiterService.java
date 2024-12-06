package com.PyszneGloEats.backend.service.waiter;

import com.PyszneGloEats.backend.dto.mail.EmailDTO;
import com.PyszneGloEats.backend.dto.waiter.MessageDto;
import com.PyszneGloEats.backend.model.Order;
import com.PyszneGloEats.backend.model.User;
import com.PyszneGloEats.backend.repository.OrderRepository;
import com.PyszneGloEats.backend.repository.UserRepository;
import com.PyszneGloEats.backend.service.email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WaiterService {

    private final OrderRepository orderRepository;
    private final EmailSenderService emailSenderService;
    private final SimpMessagingTemplate messagingTemplate;


    public List<Order> getWaiterOrders() {
        List<Order> orders = new ArrayList<>();
        List<Order> waiterOrders = orderRepository.findAll();

        for (Order order : waiterOrders) {
            if (order.getStatus() == Order.Status.COMPLETED) {
                orders.add(order);
            }
        }
        return orders;
    }

    public MessageDto generatePickUpCode(Long id) {
        Order order = orderRepository.findById(id).orElseThrow();
        User user = order.getUser();

        int pickUpCode = (int) (Math.random() * 900000) + 100000;

        order.setStatus(Order.Status.READY);
        order.setPickUpCode(pickUpCode);

        String body = "To jest twój kod do odbioru zajebistego żarcia kurwo jebana: ";
        emailSenderService.sendEmail(new EmailDTO(user.getEmail(), "Kod odbioru", body + pickUpCode));

        orderRepository.save(order);
        String content = "Zamówienie gotowe do odbioru";
        sendMessage(user.getName(),content);
        return new MessageDto(user.getName(),pickUpCode,content);

    }


    public void sendMessage(String username, String content) {
        messagingTemplate.convertAndSend("/topic/messages/" + username, content);
    }




}
