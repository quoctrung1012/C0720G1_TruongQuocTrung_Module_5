import {Component, OnInit} from '@angular/core';
import {ApiCustomerService} from '../api-customer.service';
import {ICustomer} from '../../../module/customer/ICustomer';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customers: ICustomer[] = [];

  constructor(private apiCustomerService: ApiCustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }



  getAll() {
    this.apiCustomerService.customerList().subscribe((data: ICustomer[])=>{
      console.log(data);
      this.customers = data;
      console.log(this.customers);
    })
  };

  deleteCustomer(idCustomer){
    // this.apiCustomer.deleteCustomer(id).subscribe(res => {
    //   this.customers = this.customers.filter(customer => customer.idPerson != id);
    //   console.log('Customer deleted successfully!')
    // });
    this.apiCustomerService.delete(idCustomer).subscribe(res => {
      this.customers = this.customers.filter(customer => customer.idPerson != idCustomer);
      console.log('Customer deleted successfully!')
    })
  }


}
