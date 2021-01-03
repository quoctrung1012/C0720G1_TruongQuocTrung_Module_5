import { Component, OnInit } from '@angular/core';
import {ApiCustomerService} from '../api-customer.service';
import {ICustomer} from '../../../module/customer/ICustomer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../../module/customer/CustomerType';
@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {

  // id: number;
  // post: ICustomer;
  //
  // constructor(
  //   public postService: ApiCustomerService,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) { }
  //
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['postId'];
  //
  //   this.postService.find(this.id).subscribe((data: ICustomer)=>{
  //     this.post = data;
  //   });
  // }

  idCustomer: number;
  customer: ICustomer;

  constructor(private route: ActivatedRoute, private apiCustomerService: ApiCustomerService, private router: Router) { }

  ngOnInit(): void {
    this.idCustomer = this.route.snapshot.params['postId'];

    this.apiCustomerService.find(this.idCustomer).subscribe((data: ICustomer)=>{
      this.customer = data;
    });
  }

}
