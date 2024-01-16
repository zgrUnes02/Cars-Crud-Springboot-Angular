import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../car.service";
import {Car} from "../car";
import {Observable} from "rxjs";


@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})

export class UpdateCarComponent implements OnInit {

  car: Car = new Car() ;
  id : number | undefined ;

  constructor( private carService: CarService , private activatedRoute: ActivatedRoute , private router: Router ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"] ;
    this.carService.getSingleCar(this.id).subscribe((response => {
      this.car = response ;
      this.router.navigate(["/cars/update" , this.car]) ;
    })) ;
  }

  onUpdate(id: number | undefined) {
    this.carService.updateCar(id , this.car).subscribe((response) => {
      console.log("The car has been updated with success !") ;
      this.router.navigate(["/cars"]) ;
    })
  }

}
