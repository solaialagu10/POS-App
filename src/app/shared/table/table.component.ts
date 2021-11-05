import { NgModule ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  time: string;  
  timeLate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'XXXX', time: '6:00 AM', timeLate: 'On Time'},
  {name: 'YYYY', time: '6:30 AM', timeLate: '30 Mins Late'},
  {name: 'ZZZZ', time: '6:30 AM', timeLate: '30 Mins Late'},
  {name: 'AAAA', time: '6:00 AM', timeLate: 'On Time'},
  {name: 'BBBB', time: '6:00 AM', timeLate: 'On Time'},
];
@Component({
  selector: 'table-template',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent{
  displayedColumns: string[] = ['name', 'time', 'timeLate'];
  dataSource = ELEMENT_DATA;
}
