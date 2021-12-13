package com.revature.SpringBootProjectTwo.Entities;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@ToString
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@JsonIgnoreProperties({"hibernateLazyInitializer", "$$_hibernate_interceptor"})
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long order_id; //Identifier for the submitted order

    private Date submission_date;

    @ManyToOne(cascade = CascadeType.MERGE) //VERIFY THIS, TRY OUT OneToOne if needed
    @JoinColumn(name = "buyer_id")
    private Customer buyer;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "donuts_ordered")
    private List<Donut> donuts_ordered;



}
