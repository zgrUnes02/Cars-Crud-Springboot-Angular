import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateCarComponent } from './create-car/create-car.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { UpdateCarComponent } from './update-car/update-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreateCarComponent,
    NavbarComponent,
    UpdateCarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
