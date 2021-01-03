import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiCustomerService} from '../api-customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  formAddGroup: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public apiCustomerService: ApiCustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddGroup = this.formBuilder.group({

      namePerson: ['', [Validators.required]],
      idCard: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      addressPerson: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      // customerType: this.formBuilder.group({
      //   idCustomerType: ['', [Validators.required]],
      // }),
    });
  }

  get errorCus(){
    return this.formAddGroup.controls
  }
  submitForm() {
    this.apiCustomerService.create(this.formAddGroup.value).subscribe(res => {
      console.log('Customer created successfully!');
      this.router.navigateByUrl('/customer/list')})

  }

  submit(formAddGroup: FormGroup) {
    console.log(this.formAddGroup.value);
    this.apiCustomerService.addCustomer(this.formAddGroup.value).subscribe(res => {
      console.log('Customer created successfully!');
      this.router.navigateByUrl('/customer/list')
    })
  }
}
