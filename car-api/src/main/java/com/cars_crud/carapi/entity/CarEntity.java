package com.cars_crud.carapi.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cars")
@NoArgsConstructor
public class CarEntity {
    @Id
    @Column(name = "id" , nullable = false , updatable = false)
    @GeneratedValue(generator = "car_generator" , strategy = GenerationType.AUTO)
    @SequenceGenerator(name = "car_generator" , sequenceName = "car_sequence" , initialValue = 1 , allocationSize = 1)
    private Integer id ;

    @Column(name = "name" , nullable = false , updatable = true , unique = true)
    private String name ;

    @Column(name = "color" , nullable = false , updatable = true)
    private String color ;

    @Column(name = "top_speed" , nullable = false , updatable = true)
    private Integer topSpeed ;

    @Column(name = "horse_power" , nullable = false , updatable = true)
    private Integer horsePower ;

    public CarEntity(String name , String color , Integer topSpeed , Integer horsePower) {
        super() ;
        this.name = name ;
        this.color = color ;
        this.horsePower = horsePower ;
        this.topSpeed = topSpeed ;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getTopSpeed() {
        return topSpeed;
    }

    public void setTopSpeed(Integer topSpeed) {
        this.topSpeed = topSpeed;
    }

    public Integer getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(Integer horsePower) {
        this.horsePower = horsePower;
    }
}
