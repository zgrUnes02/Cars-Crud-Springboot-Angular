package com.cars_crud.carapi.service;

import com.cars_crud.carapi.entity.CarEntity;
import com.cars_crud.carapi.respository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository ;

    // get all cars
    public List<CarEntity> getAllCars() {
        List<CarEntity> carEntityList = new ArrayList<>() ;
        carRepository.findAll().forEach(carEntityList::add);
        return carEntityList ;
    }

    // get single car
    public CarEntity getSingleCar(Integer id) {
        return carRepository.findById(id).get() ;
    }

    // create new car
    public void createNewCar(CarEntity carEntity) {
        carRepository.save(carEntity) ;
    }

    // update single car
    public void updateSingleCar(Integer id , CarEntity carEntity) {
        // get car by id
        CarEntity carWantToUpdate = carRepository.findById(id).get() ;

        // update properties
        carWantToUpdate.setName(carEntity.getName());
        carWantToUpdate.setColor(carEntity.getColor());
        carWantToUpdate.setTopSpeed(carEntity.getTopSpeed());
        carWantToUpdate.setHorsePower(carEntity.getHorsePower());

        // save
        carRepository.save(carWantToUpdate) ;
    }

    // delete single car
    public void deleteSingleCar(Integer id) {
        carRepository.deleteById(id);
    }
}
