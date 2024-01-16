import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  cars: Car[] | undefined ;

  ngOnInit() {
    this.carService.getAllCars().subscribe((response) => {
      this.cars = response ;
    })
  }

  constructor( private carService : CarService) {
  }

  onDelete(id: number) {
    console.log(id)
  }
}
