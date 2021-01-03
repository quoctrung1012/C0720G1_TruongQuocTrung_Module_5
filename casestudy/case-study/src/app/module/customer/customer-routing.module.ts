import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from '../../component/customer/list-customer/list-customer.component';
import {AddCustomerComponent} from '../../component/customer/add-customer/add-customer.component';
import {DetailCustomerComponent} from '../../component/customer/detail-customer/detail-customer.component';
import {EditCustomerComponent} from '../../component/customer/edit-customer/edit-customer.component';


const routes: Routes = [
  {path: 'customer', redirectTo: 'customer/list', pathMatch: 'full'},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: AddCustomerComponent},
  { path: 'post/:idCustomer/view', component: DetailCustomerComponent },
  // {path: 'customer/detail/:idCustomer', component: DetailCustomerComponent},
  {path: 'customer/update/:idCustomer/', component: EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
