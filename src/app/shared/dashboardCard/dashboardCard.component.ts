import { NgModule ,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'dashboardCard-template',
  templateUrl: './dashboardCard.component.html',
  styleUrls: ['./dashboardCard.component.scss'],
})
export class DashboardCardComponent implements OnInit{
  @Input('title')  titleValue = '';
  @Input('imageClass') imageClass= '';
  @Input('count')  count;
  @Input('content1')  content1= '';
  @Input('color')  colorName= '';
  @Input('digitalA')  digitalA;
  @Input('digitalB')  digitalB;
  @Input('walkINA')  walkINA;
  @Input('walkINB')  walkINB;
  @Input('contentA')  contentA;
  @Input('contentB')  contentB;
  value = 0;
  differenceValue =0;
  updateTime: number;
  constructor(private router:Router){
    setInterval(() => {
      if(this.titleValue=='Orders in Process'){
        this.digitalA = this.digitalA<3 && this.digitalA>0 ? this.digitalA+1 : this.digitalA-1;
        this.walkINA = this.walkINA<3 && this.walkINA>0 ? this.walkINA+1 : this.walkINA-1;
        this.count = this.digitalA + this.walkINA;
      }
      
    }, 30000);
    setInterval(() => {
      if(this.titleValue=='Orders in Process'){
        this.digitalB = this.digitalB<5 && this.digitalB>0 ? this.digitalB+1 : this.digitalB-1;
        this.walkINB = this.walkINB<4 && this.walkINB>0 ? this.walkINB+1 : this.walkINB-1;
        this.contentB = this.digitalB + this.walkINB;
      }
      if(this.titleValue=='Order Processing Time'){
        this.digitalA = this.digitalA<=8  ? this.digitalA+1 : this.digitalA-1;
        this.walkINA = this.walkINA<=8  ? this.walkINA+1 : this.walkINA-1;
        if(this.digitalA > 8){
          this.digitalA=4;
        }
        if(this.walkINA > 8){
          this.walkINA=6;
        }
        
        this.count = Math.floor((this.digitalA + this.walkINA)/2);
      }
    }, 60000);
    setInterval(() => {
      if(this.titleValue=='Sales'){        
        if(this.count<5400){
          this.count = this.count+35;
          this.differenceValue = this.contentB - this.count;
          this.value = this.count/this.contentB *100 ; 
          let date = new Date();
          this.updateTime = date.getTime()
        }
      }
    }, 180000);
  }

  
  ngOnInit() {
    this.value = this.count/this.contentB *100;
    this.differenceValue = this.contentB-this.count;
    let date = new Date();
    this.updateTime = date.getTime()
  }
  color = '#0089ff';
  mode: ProgressBarMode = 'determinate';
  // totalValue=5900;
  // currentValue = 4350;
  // value = this.currentValue/this.totalValue *100;
  // differenceValue = this.totalValue-this.currentValue;
  
  onChange(event){
    console.log("event ", this.contentB);
    this.count = event.value;    
    this.value = this.count/this.contentB *100 ;  
    this.differenceValue= this.contentB - this.count;
  } 
  navigate(value){
    let url:any;
    if(value=='Orders in Process' || value=='Order Processing Time'){
      url = '/ordersPage';
    }
    else if(value=='Associates'){
      url='/associatesPage';
    }
    this.router.navigateByUrl(url);
  }
}
