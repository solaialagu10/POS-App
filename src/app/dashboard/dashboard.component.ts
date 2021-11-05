import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmitterService } from '../emitterService';
import { Router } from '@angular/router';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class DashboardModule { }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  title='Orders in Process';
  imageClass='image1';
  count=2;
  content='Getting ready';
  digitalA = 1;
  digitalB = 3;
  walkINA = 1;
  walkINB = 2;
  contentA='Total Orders';
  contentB=5;

  title1='Order Processing Time';
  imageClass1='image2';
  count1=5;
  content1='Mins Avg';
  digital1A = 4;
  digital1B = 'Mins';
  walkIN1A = 6;
  walkIN1B = 'Mins';
  content1A='Getting ready';
  content1B='Last 60 Mins';

  title2='Associates';
  imageClass2='image3';
  count2=5;
  content2='Working Today';
  digital2A = 3;
  digital2B = 5;
  walkIN2A = 2;
  walkIN2B = 2;
  content2A='Planned Associates';
  content2B=7;

  title3='Sales';
  imageClass3='image4';
  count3=2350;  
  content3='Last updated at ';
  content3A='Forecast';
  content3B=5900;

  healthyDevices = 10;
  totalDevices = 14;
  faultyDevices = this.totalDevices - this.healthyDevices ;  
  health= (this.healthyDevices/(this.healthyDevices + this.faultyDevices)) *100;
  
  digitalOrders="08";
  walkInOrders="12";
  order1='Chicken Bowl';
  order2='Veggie Bowl';
  order3='Steak Burrito';
  order1Value='07';
  order2Value='05';
  order3Value='08';
  showNotification: any=false;
  currentDate:any
  onChange(event){
    console.log("event ", event.value);
    this.healthyDevices = event.value;    
    this.faultyDevices = this.totalDevices - this.healthyDevices ;  
    this.health= (this.healthyDevices/(this.healthyDevices + this.faultyDevices)) *100;
  } 
  constructor(private emit: EmitterService,private router:Router){
    // this.emit.getData().subscribe((data)=>{
    //   this.showNotification = data.emitData;
    // })
  }
  gotoSupport(){
    this.router.navigateByUrl('/supportPage');
  }
  ngOnInit(){
    this.currentDate = new Date()
  }
}
