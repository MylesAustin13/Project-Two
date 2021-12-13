package com.revature.SpringBootProjectTwo.Controllers;

import com.revature.SpringBootProjectTwo.Entities.Order;
import com.revature.SpringBootProjectTwo.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/orders")
    public Order addNewOrder(@RequestBody Order order){
        System.out.println(order);
        return orderService.addOrder(order);
    }

    @GetMapping("/orders/{id}")
    public Order getSpecificOrderById(@PathVariable("id") long id){
        System.out.println(orderService.getOrderById(id));
        return orderService.getOrderById(id);
    }

    @GetMapping("/orders/owner/{ownerid}")
    public List<Order> getSpecificOrdersByOwner(@PathVariable("ownerid") long ownerid){
        System.out.println(orderService.getAllOrdersByOwner(ownerid));
        return orderService.getAllOrdersByOwner(ownerid);
    }

}
