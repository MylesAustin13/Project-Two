package com.revature.SpringBootProjectTwo.Services;

import com.revature.SpringBootProjectTwo.Entities.Donut;
import com.revature.SpringBootProjectTwo.Repositories.DonutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonutServiceImpl implements DonutService{
    @Autowired
    private DonutRepository donutRepository;

    @Override
    public Donut addDonut(Donut new_donut) {
        return donutRepository.save(new_donut);
    }

    @Override
    public List<Donut> getAllDonuts() {
        return donutRepository.findAll();
    }

    @Override
    public Donut getDonutById(long id) {
        return donutRepository.getById(id);
    }

    @Override
    public List<Donut> getAllDonutsWithString(String search) {
        return donutRepository.findByDonutContaining(search);
    }

    @Override
    public void updateDonut(Donut upd_donut) {
        donutRepository.save(upd_donut);
    }

    @Override
    public void deleteDonut(long id) {
        donutRepository.deleteById(id);
    }
}
