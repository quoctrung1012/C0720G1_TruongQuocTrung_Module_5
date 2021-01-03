import { Component, OnInit } from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentDAO} from '../model/StudentDAO';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList = StudentDAO.studentDAO;
  studentDetail: IStudent;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this.studentService.findAll();
  }

}
