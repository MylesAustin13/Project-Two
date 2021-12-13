package com.revature.SpringBootProjectTwo.Entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long order_id; //Identifier for the submitted order

    private Date submission_date;

    @ManyToOne(targetEntity = Order.class, cascade = CascadeType.ALL) //VERIFY THIS, TRY OUT OneToOne if needed
    @JoinColumn(name = "buyer_id")
    private Customer buyer;

    @OneToMany(targetEntity = Order.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "donuts_ordered")
    private List<Donut> donuts_ordered;
    //private double total_price; SKIPPING THIS FOR POTENTIAL EFFICIENCY

}
