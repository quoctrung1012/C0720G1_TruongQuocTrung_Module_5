import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-manament',
  templateUrl: './student-manament.component.html',
  styleUrls: ['./student-manament.component.scss']
})
export class StudentManamentComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'Nguyễn Văn A',
    phone: '0905123456',
    address: 'Đà Nẵng',
    birthday: '01/01/1999',
    scores: 5,
    avatar: 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg',
    avatarSize : 15,
  }

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
