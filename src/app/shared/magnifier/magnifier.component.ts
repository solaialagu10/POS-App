import { NgModule ,Input,OnInit } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'magnifier-template',
  templateUrl: './magnifier.component.html',
  styleUrls: ['./magnifier.component.scss'],
})
export class MagnifierComponent {
  @Input('image')  image = '';   
  top:string = 15 as any;
  right:string = 10 as any;
  lensWidth:string =10 as any;
  lensHeight:string = 10 as any;
  resultWidth:string = 45 as any;
  resultHeight:string = 55 as any;
  imgWidth:string = 25 as any;
  imgHeight:string = 25 as any;
         
  
}
