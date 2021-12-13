package com.revature.SpringBootProjectTwo.Repositories;

import com.revature.SpringBootProjectTwo.Entities.Donut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonutRepository extends JpaRepository<Donut, Long> {

    @Query("select d from Donut d where d.donut_name like ?1 or d.donut_description like ?1")
    public List<Donut> findByDonutContaining(String s);
}
