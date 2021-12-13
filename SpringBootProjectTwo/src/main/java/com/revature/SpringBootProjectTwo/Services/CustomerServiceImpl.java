package com.revature.SpringBootProjectTwo.Services;

import com.revature.SpringBootProjectTwo.Entities.Customer;
import com.revature.SpringBootProjectTwo.Repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository custRepository;

    @Override
    public Customer addCustomer(Customer new_cust) {
        return custRepository.save(new_cust);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return custRepository.findAll();
    }

    @Override
    public Customer getCustomerById(long id) {
        return custRepository.getById(id);
    }

    @Override
    public Customer getCustomerByEmail(String email) {
        return custRepository.findByEmail(email);
    }

    @Override
    public Customer checkCustomerCredentials(String email_attempt, String password_attempt) {
        Customer user = custRepository.findByEmail(email_attempt);
        if(user == null){
            return null; //Email is NOT in the table, don't bother looking for password since it'll be wrong
        }
        else{
            if(user.getCust_password().equals(password_attempt)){
                return user; //Email matches the password! This user is right.
            }
            else{
                return null; //Email is in table, but password was wrong. Login failed.
            }
        }
    }

    @Override
    public void updateCustomer(Customer upd_cust) {
        custRepository.save(upd_cust);
    }

    @Override
    public void deleteCustomer(long id) {
        custRepository.delete(custRepository.getById(id));
    }
}
