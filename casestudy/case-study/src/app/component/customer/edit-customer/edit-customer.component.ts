import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../../module/customer/ICustomer';
import {ApiCustomerService} from '../api-customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  idCustomer: number;
  customer: ICustomer;
  formEditGroup: FormGroup;

  constructor(public formBuilder: FormBuilder,public apiCustomerService: ApiCustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.idCustomer = this.route.snapshot.params['idCustomer'];
    this.apiCustomerService.getById(this.idCustomer).subscribe((data: ICustomer)=>{
      this.customer = data;
    });

    this.formEditGroup = new FormGroup({
      namePerson: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      addressPerson: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      customerType: new FormGroup({
        idCustomerType: new FormControl('', [Validators.required]),
      }),
    });
  }
  get errorCus(){
    return this.formEditGroup.controls
  }

  submit(formEditGroup: FormGroup) {
    console.log(this.formEditGroup.value);
    this.apiCustomerService.update(this.idCustomer, this.formEditGroup.value).subscribe(res => {
      console.log('Customer updated successfully!');
      this.router.navigateByUrl('customer/customer-list');
    })
  }
}
