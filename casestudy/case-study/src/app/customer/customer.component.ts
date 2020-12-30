import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../module/customer/ICustomer';
import {ICustomerType} from '../module/customer/ICustomerType';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
