package com.revature.SpringBootProjectTwo.Repositories;

import com.revature.SpringBootProjectTwo.Entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("select o from Order o where o.buyer = ?1")
    public List<Order> findOrdersByOwner(long id);
}
