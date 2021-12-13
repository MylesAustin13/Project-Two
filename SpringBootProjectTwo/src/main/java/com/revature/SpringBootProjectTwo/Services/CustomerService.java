package com.revature.SpringBootProjectTwo.Services;

import com.revature.SpringBootProjectTwo.Entities.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService{
    public Customer addCustomer(Customer new_cust);
    public List<Customer> getAllCustomers();
    public Customer getCustomerById(long id);
    public Customer getCustomerByEmail(String email);
    public long checkCustomerCredentials(String email_attempt, String password_attempt); //Return -1 if login fails, return customer id if successful
    public void updateCustomer(Customer upd_cust);
    public void deleteCustomer(long id);

}
