import { NgModule ,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
    email:any;
    password:any;
    @Output() sendParent = new EventEmitter<any>();
ngOnInit(){}
signIn(){
    if(this.email == 'jsmith@chipotle.com' && this.password=='1234'){
        this.sendParent.emit(true);
    }
}
}