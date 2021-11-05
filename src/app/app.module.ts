import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssociatesComponent } from './associates/associates.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { SupportComponent } from './support/support.component';
import { CardComponent } from './shared/card/card.component';
import { TableComponent } from './shared/table/table.component';
import { ChartComponent } from './shared/chart/chart.component';
import { DashboardCardComponent } from './shared/dashboardCard/dashboardCard.component';
import { MagnifierComponent } from './shared/magnifier/magnifier.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { EmitterService } from './emitterService';
import { ImgMagnifier } from 'ng-img-magnifier';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssociatesComponent,
    InventoryComponent,
    OrdersComponent,
    SupportComponent,
    CardComponent,
    TableComponent,
    DashboardCardComponent,
    ChartComponent,
    HeaderComponent,
    MagnifierComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    ImgMagnifier
  ],
  exports:[
    HeaderComponent,
    LoginComponent
  ],
  providers: [EmitterService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
