import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PeriodicElement {
  device: string;
  image: string;
  status: string;  
  alert: string;
  action:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {device: 'Fridge', image:'/assets/images/Fridge.jpg', status: 'Faulty', alert: 'Y',action:'Raise a Ticket'},
  {device: 'Grills', image:'/assets/images/Grills.jpg', status: 'Healthy', alert: 'N',action:'Raise a Ticket'},
  {device: 'Oven', image:'/assets/images/Oven.jpg', status: 'Healthy', alert: 'N',action:'Raise a Ticket'},
  {device: 'Stoves', image:'/assets/images/Ranges&Stoves.jpg', status: 'Healthy', alert: 'N',action:'Raise a Ticket'},
  {device: 'Tortilla Maker', image:'/assets/images/Tortillamaker.jpg', status: 'Healthy', alert: 'N',action:'Raise a Ticket'},
  {device: 'Refrigerator', image:'/assets/images/refrigerator.png', status: 'Healthy', alert: 'N',action:'Raise a Ticket'},
  {device: 'Stove', image:'/assets/images/stove.jpeg', status: 'Healthy', alert: 'N',action:'Raise a Ticket'},
 
];

@Component({
  selector: 'support-dashboard',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent{
  displayedColumns: string[] = ['device', 'status', 'alert','action'];
  dataSource = ELEMENT_DATA;
}
