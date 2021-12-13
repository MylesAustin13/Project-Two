package com.revature.SpringBootProjectTwo.Entities;


import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "donuts")
public class Donut {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long donut_id;                //Identifier for each donut
    private String donut_name;
    private String donut_description;
    private double donut_price;
    private String donut_img; // Image URL
}
