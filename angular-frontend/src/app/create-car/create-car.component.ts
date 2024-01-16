import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car = new Car() ;

  constructor( private carService : CarService , private router : Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.carService.createNewCar(this.car).subscribe((response) => {
      console.log("The car has been create with success !") ;
      this.router.navigateByUrl("/cars");
    } , error => {
      console.log(error) ;
    }) ;
  }
}
