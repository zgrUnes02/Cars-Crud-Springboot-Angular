import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";
import {Router} from "@angular/router";

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

  constructor( private carService : CarService , private router: Router) {
  }

  editCar(id: number | undefined) {
    this.router.navigate(["/cars/update" , id]) ;
  }

  deleteCar(id: number | undefined) {
    this.carService.deleteCar(id).subscribe((response) => {
      console.log("The car has been deleted with success !") ;
      this.cars = this.cars?.filter(car => car.id != id) ;
    })
  }
}
