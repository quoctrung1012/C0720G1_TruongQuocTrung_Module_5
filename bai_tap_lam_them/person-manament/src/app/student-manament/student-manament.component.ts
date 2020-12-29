import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-manament',
  templateUrl: './student-manament.component.html',
  styleUrls: ['./student-manament.component.scss']
})
export class StudentManamentComponent implements OnInit {
  @Input()
  student: IStudent;

  constructor() {
  }

  ngOnInit(): void {
  }
  updateScores(scores){
    this.student.scores = scores;
  }
  updateAvatar(avatar){
    this.student.avatar = avatar;
  }
  updateSize(value){
    this.student.avatarSize = value;
  }
}
