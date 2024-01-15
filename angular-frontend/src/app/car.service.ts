import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "./car";

@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor( private httpClient : HttpClient ) { }

  getAllCars() {
    return this.httpClient.get<Car[]>("http://localhost:8080/cars") ;
  }
}
