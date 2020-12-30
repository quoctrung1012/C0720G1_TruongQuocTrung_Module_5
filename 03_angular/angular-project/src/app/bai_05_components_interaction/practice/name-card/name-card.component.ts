import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  // @Input()
  // card = {
  //   cardName: 'Professional Dev',
  //   email: 'prodev@abc.xyz',
  //   phone: '0123456789'
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
