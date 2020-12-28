import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-size',
  templateUrl: './front-size.component.html',
  styleUrls: ['./front-size.component.scss']
})
export class FrontSizeComponent implements OnInit {
  fontSize = 14;
  onChange(value) {
    this.fontSize = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
