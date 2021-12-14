package com.revature.SpringBootProjectTwo.Repositories;

import com.revature.SpringBootProjectTwo.Entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    @Query("select c from Customer c where c.cust_email = ?1")
    public Customer findByEmail(String e);
}

