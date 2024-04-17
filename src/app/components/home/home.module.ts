import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { ShapeComponent } from './shape/shape.component';
import { InfoComponent } from './info/info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ShapeComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class HomeModule { }
