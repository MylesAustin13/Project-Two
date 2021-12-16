package com.revature.SpringBootProjectTwo.Repositories;

import com.revature.SpringBootProjectTwo.Entities.Donut;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DonutRepositoryTest {

    @Autowired
    private DonutRepository donutRepository;

    @Test
    public void getDonutsContainingTest(){
        List<Donut> donuts = donutRepository.findByDonutContaining("pack");
        System.out.println(donuts);
    }
}