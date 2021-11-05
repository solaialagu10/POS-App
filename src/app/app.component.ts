import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'hotel-automation';
  loggedIn: boolean=false;
  constructor(private router: Router){
    if(window.location.pathname == '/login' || window.location.pathname == '/'){
      this.loggedIn = false;
    }
    else{
      this.loggedIn=true;
    }
  }
  checkLogin(){
    this.loggedIn = true;
    this.router.navigateByUrl('/dashboardPage');
  }
  logout(){
    this.loggedIn=false;
    this.router.navigateByUrl('/login');
  }
}
