import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "./car";

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private baseUrl: string = "http://localhost:8080/cars" ;

  constructor( private httpClient : HttpClient ) { }

  getAllCars() {
    return this.httpClient.get<Car[]>(`${this.baseUrl}`) ;
  }

  createNewCar(car: Car) {
    return this.httpClient.post<Car>(`${this.baseUrl}` , car) ;
  }
}
