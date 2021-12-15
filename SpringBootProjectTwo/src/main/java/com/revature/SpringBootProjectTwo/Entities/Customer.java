package com.revature.SpringBootProjectTwo.Entities;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
@Builder
@ToString
@Getter
@Setter
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "customers",
        uniqueConstraints = @UniqueConstraint(
                name = "cust_email_unique",
                columnNames = "email"
        ))
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long cust_id;               //Identifier for the customer
    private String cust_first_name;
    private String cust_last_name;
    @Column(
            name = "email",
            nullable = false
    )
    private String cust_email;
    private String cust_password;
    private String cust_address;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "favorites")
    private List<Donut> favorites;

}
