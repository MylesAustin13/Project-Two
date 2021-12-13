package com.revature.SpringBootProjectTwo.Services;

import com.revature.SpringBootProjectTwo.Entities.Donut;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DonutService {
    public Donut addDonut(Donut new_donut);
    public List<Donut> getAllDonuts();
    public Donut getDonutById(long id);
    public List<Donut> getAllDonutsWithString(String search);
    public void updateDonut(Donut upd_donut);
    public void deleteDonut(long id);
}
