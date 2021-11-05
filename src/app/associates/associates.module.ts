import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AssociatesComponent } from './associates.component';
import {MatCardModule} from '@angular/material/card';
import {CardModule} from '../shared/card/card.module';
@NgModule({
  declarations: [
    AssociatesComponent
  ],
  imports: [
    MatCardModule,
    CardModule
  ],
  exports: [
    AssociatesComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
 
})
export class AssociatesModule { }
