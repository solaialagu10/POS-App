import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CardComponent],
  imports: [MatCardModule],
  exports: [CardComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
})
export class CardModule{
  
}
