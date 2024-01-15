package com.cars_crud.carapi.controller;

import com.cars_crud.carapi.entity.CarEntity;
import com.cars_crud.carapi.service.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CarController {
    private final CarService carService ;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    // get all cars :
    @RequestMapping(method = RequestMethod.GET , value = "/cars")
    public List<CarEntity> getAllCars() {
        return carService.getAllCars();
    }

    // get single car by id :
    @RequestMapping(method = RequestMethod.GET , value = "/cars/{id}")
    public CarEntity getSingleCar(@PathVariable Integer id) {
        return carService.getSingleCar(id);
    }

    // create new car :
    @RequestMapping(method = RequestMethod.POST , value = "/cars")
    public void createNewCar(@RequestBody CarEntity carEntity) {
        carService.createNewCar(carEntity);
    }

    // update single car :
    @RequestMapping(method = RequestMethod.PUT , value = "/cars")
    public void updateSingleCar(@RequestBody CarEntity carEntity) {
        carService.updateSingleCar(carEntity);
    }

    // delete single car :
    @RequestMapping(method = RequestMethod.DELETE , value = "/cars/{id}")
    public void deleteSingleCar(@PathVariable Integer id) {
        carService.deleteSingleCar(id);
    }
}
