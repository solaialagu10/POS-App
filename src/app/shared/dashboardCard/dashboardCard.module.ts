import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardCardComponent } from './dashboardCard.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DashboardCardComponent],
  imports: [MatCardModule],
  exports: [DashboardCardComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
})
export class DashboardCardModule{
  
}
