package com.revature.SpringBootProjectTwo.Services;

import com.revature.SpringBootProjectTwo.Entities.Donut;
import com.revature.SpringBootProjectTwo.Entities.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {
    public Order addOrder(Order new_order);
    public Order getOrderById(long id);
    public List<Order> getAllOrdersByOwner(long owner_id);
    public void updateOrder(Order upd_order);
    public void deleteOrder(long id);
}
