import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Cases} from '../cases';
import {ActivatedRoute, Router} from '@angular/router';
import {__core_private_testing_placeholder__} from '@angular/core/testing';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {

  cases: Cases = {_id: '', name: '', gender: '', age: null, address: '', city: '', country: '', status: '', updated: null};
  isLoading = false;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCasesDetails(this.route.snapshot.params.id);
  }

  getCasesDetails(id: string) {
    this.api.getCasesById(id)
      .subscribe((data: any) => {
        this.cases = data;
        console.log(this.cases);
        this.isLoading = false;
      });
  }

  deleteCases(id: string) {
    this.api.deleteCases(id)
      .subscribe((res) => {
        this.isLoading = false;
        this.router.navigate(['/cases']);
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  setColor(status: string) {
    let color: string;
    if (status === 'Positive') {
      color = 'orange-color';
    } else if (status === 'Recovered') {
      color = 'green-color';
    } else {
      color = 'red-color';
    }
  }
}
