package com.PyszneGloEats.backend.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "order_items")
public class OrderItem {


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

@ManyToOne
@JoinColumn(name = "order_id")
private Order order;

@ManyToOne
@JoinColumn(name = "menu_item_id")
private MenuItem menuItem;

private int quantity;


}
