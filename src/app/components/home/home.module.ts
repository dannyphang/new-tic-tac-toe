import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { ShapeComponent } from './shape/shape.component';


@NgModule({
  declarations: [
    ShapeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
