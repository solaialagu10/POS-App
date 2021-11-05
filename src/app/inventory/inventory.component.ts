import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PeriodicElement {
  item: string;
  inventory: string;  
  alert: string;
  snooze:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'Chicken', inventory: '6 lb', alert: 'Y',snooze:'Y'},
  {item: 'Steak', inventory: '5 lb', alert: 'Y',snooze:'Y'},
  {item: 'Barbacoa', inventory: '5 lb', alert: 'N',snooze:'N'},
  {item: 'Carnitas', inventory: '8 lb', alert: 'Y',snooze:'Y'},
  {item: 'Sofritas', inventory: '4 lb', alert: 'Y',snooze:'Y'},
  {item: 'Veggie', inventory: '9 lb', alert: 'N',snooze:'N'},
  {item: 'Chips', inventory: '9 lb', alert: 'Y',snooze:'Y'},
  {item: 'Bottled Drink', inventory: '23 Pc', alert: 'N',snooze:'N'}
];


@Component({
  selector: 'inventory-dashboard',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent{
  displayedColumns: string[] = ['item', 'inventory', 'alert','snooze'];
  dataSource = ELEMENT_DATA;
  color='#ed960b';
  alertItems = 0;
  snoozeItems = 0;
  constructor() {
    this.getAlertItems();    
  }
  getAlertItems(){
    this.alertItems  = 0;
    this.dataSource.filter((value,key)=>{
      if(value.alert == "Y"){
        this.alertItems  = this.alertItems + 1;
      }
    });
    this.snoozeItems = this.dataSource.length - this.alertItems;
  }
  onChange(event,item){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.item == item){
        value.alert = event.checked == true ? 'Y' : 'N';
      }
      return true;
    });
    this.getAlertItems();
  }  
}
