import { NgModule ,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  public currentTime:any;
  public currentdate:any;
  private subject = new Subject<any>();
  showUserDropdown: boolean;
  showNotificationDiv: any=false;
  notificationArray:any=[];
  @Output() logoutEmit = new EventEmitter<any>();
  constructor(private router: Router){
    setInterval(() => {
      let date = new Date();
      this.currentTime = date.getTime()
      this.currentdate=date;
    }, 1);
  }

  ngOnInit(){
    this.notificationArray = [
      {
        'detail': "Current Inventory of chicken is not enough to fulfil order backlog. Please begin chicken preparation.",
        'time': "07 mins ago",
      },
      {
        'detail': "Football game getting over in next 30 mins.Please plan for extended hours (if applicable).",
        'time': "13 mins ago",
      }
    ]
  }
  
  showNotification(value?){
    //this.emitter.sendData(true,'showNotification');
    this.showNotificationDiv = value;
  }
  showDropdown(){
    this.showUserDropdown = !this.showUserDropdown;
  }
  hideNoti(index){
    this.notificationArray.splice(index,1);
    if(this.notificationArray.length == 0){
      this.showNotificationDiv=false;
    }
  }
  logout(){
    this.logoutEmit.emit(true);
  }
}