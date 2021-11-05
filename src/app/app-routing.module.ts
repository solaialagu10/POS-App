import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssociatesComponent } from './associates/associates.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboardPage', component: DashboardComponent },
  { path: 'associatesPage', component: AssociatesComponent },
  { path: 'inventoryPage', component: InventoryComponent },
  { path: 'ordersPage', component: OrdersComponent },
  { path: 'supportPage', component: SupportComponent },
  { path: 'login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
