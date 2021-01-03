import { Component, OnInit } from '@angular/core';
import { DateUtilService } from './date-util/date-util.service';



@Component({
  selector: 'app-time-live',
  templateUrl: './time-live.component.html',
  styleUrls: ['./time-live.component.scss']
})
export class TimeLiveComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
