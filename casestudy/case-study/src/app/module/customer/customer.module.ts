import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {ListCustomerComponent} from '../../component/customer/list-customer/list-customer.component';
import {AddCustomerComponent} from '../../component/customer/add-customer/add-customer.component';
import {DetailCustomerComponent} from '../../component/customer/detail-customer/detail-customer.component';
import {EditCustomerComponent} from '../../component/customer/edit-customer/edit-customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ListCustomerComponent, AddCustomerComponent, DetailCustomerComponent, EditCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
