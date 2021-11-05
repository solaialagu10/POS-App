import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [TableComponent],
  imports: [MatTableModule],
  exports: [TableComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
})
export class TableModule{
  
}
