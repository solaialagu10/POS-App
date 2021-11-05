import { NgModule,Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  time: string;  
  timeLate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Jadon Smith', time: '6:00 AM', timeLate: 'On Time'},
  {name: 'Price Rangers', time: '6:30 AM', timeLate: '30 Mins Late'},
  {name: 'Will Houghton', time: '6:30 AM', timeLate: '30 Mins Late'},
  {name: 'Sam Peter', time: '6:00 AM', timeLate: 'On Time'},
  {name: 'Fnatic Jw', time: '6:00 AM', timeLate: 'On Time'},
];
@Component({
  selector: 'associates-dashboard',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.scss'],
})
export class AssociatesComponent implements OnInit{
  title='Associates in store';
  content='5';
  color='#0089ff';
  title1='Associates Scheduled in Next Shift';
  content1='9';
  color1='#0089ff';
  title2='Associates on leave in Next Shift';
  content2='3';
  color2='#ed960b';
  displayedColumns: string[] = ['name', 'time', 'timeLate'];
  dataSource = ELEMENT_DATA;
  ngOnInit(){
   
  }

}
