package com.revature.SpringBootProjectTwo.Controllers;

import com.revature.SpringBootProjectTwo.Entities.Donut;
import com.revature.SpringBootProjectTwo.Services.DonutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DonutController {

    @Autowired
    private DonutService donutService;

    @PostMapping("/donuts")
    public Donut addNewDonut(@RequestBody Donut d){
        return donutService.addDonut(d);
    }

    @GetMapping("/donuts")
    public List<Donut> getAllDonutsList(){
        return donutService.getAllDonuts();
    }

    @GetMapping("/donuts/search/{search}")
    public List<Donut> getSpecificDonutsList(@PathVariable("search") String s){
        return donutService.getAllDonutsWithString(s);
    }

    @GetMapping("/donuts/search")
    public List<Donut> getAllDonutsSearch(){
        return donutService.getAllDonuts();
    }
    @GetMapping("/donuts/{id}")
    public Donut getSpecificDonutById(@PathVariable("id") long id){
        return donutService.getDonutById(id);
    }
}
