package com.revature.SpringBootProjectTwo.Controllers;


import com.revature.SpringBootProjectTwo.Entities.Customer;
import com.revature.SpringBootProjectTwo.Services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService custService;

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer c){
        return custService.addCustomer(c);
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers(){
        return custService.getAllCustomers();
    }

    @GetMapping("/customers/{id}")
    public Customer getCustomerById(@PathVariable("id") long id){
        return custService.getCustomerById(id);
    }

    @PostMapping("/customers/login/{email}{password}")
    public long checkCustomerLogin(@PathVariable("email") String email, @PathVariable("password") String password){
        return custService.checkCustomerCredentials(email, password);
    }
}
