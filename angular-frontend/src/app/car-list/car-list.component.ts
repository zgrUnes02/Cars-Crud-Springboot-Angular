import {Component, OnInit} from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  cars: Car[] | undefined ;

  ngOnInit() {
    this.cars = [
      {id : 1 , name : "audi rs7" , color : "red" , topSpeed : 320 , horsePower : 600} ,
      {id : 2 , name : "audi rs6" , color : "white" , topSpeed : 350 , horsePower : 650} ,
      {id : 3 , name : "bmw m5" , color : "black" , topSpeed : 300 , horsePower : 550} ,
    ]
  }

  constructor() {
  }
}
