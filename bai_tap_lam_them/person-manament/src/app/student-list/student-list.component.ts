import { Component, OnInit } from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: IStudent[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      phone: '0905123456',
      address: 'Đà Nẵng',
      birthday: '01/01/1999',
      scores: 8,
      avatar: 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg',
      avatarSize : 30,
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      phone: '0905123456',
      address: 'Đà Nẵng',
      birthday: '01/01/1998',
      scores: 5,
      avatar: 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg',
      avatarSize : 30,
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      phone: '0905123456',
      address: 'Đà Nẵng',
      birthday: '01/01/1997',
      scores: 3,
      avatar: 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg',
      avatarSize : 30,
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      phone: '0905123456',
      address: 'Đà Nẵng',
      birthday: '01/01/1996',
      scores: 4,
      avatar: 'https://cdn.vietnambiz.vn/2020/3/23/9005608425724062764144382127330218338156544n-1584933586723443851956.jpg',
      avatarSize : 30,
    }
  ];
  studentDetail: IStudent;

  constructor() { }

  ngOnInit(): void {
  }

  getStudentDetail(students: IStudent) {
    this.studentDetail = students;
  }
}
