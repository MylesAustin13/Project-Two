package com.revature.SpringBootProjectTwo.Services;

import com.revature.SpringBootProjectTwo.Entities.Order;
import com.revature.SpringBootProjectTwo.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order addOrder(Order new_order) {
        return orderRepository.save(new_order);
    }

    @Override
    public Order getOrderById(long id) {
        return orderRepository.getById(id);
    }

    @Override
    public List<Order> getAllOrdersByOwner(long owner_id) {
        return orderRepository.findOrdersByOwner(owner_id);
    }

    @Override
    public void updateOrder(Order upd_order) {
        orderRepository.save(upd_order);
    }

    @Override
    public void deleteOrder(long id) {
        orderRepository.deleteById(id);
    }
}
