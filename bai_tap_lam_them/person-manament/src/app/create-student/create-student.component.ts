import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentDAO} from '../model/StudentDAO';
import {Route, Router} from '@angular/router';
import {StudentService} from '../student.service';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  createStudentForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.createStudentForm = this.formBuilder.group({
      id: ['0'],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(090|091)\d{7}$/)]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      scores: ['', [Validators.required]],
      avatar: [''],
      avatarSize: ['']
    });
  }


  // createStudent(createStudentForm: FormGroup) {
  //   this.studentService.saveStudent(this.createStudentForm.value);
  //   this.router.navigateByUrl('list-student').then(r => '');
  // }

  createStudent(createStudentForm: FormGroup) {
    let tempStudent: IStudent;
    tempStudent = this.createStudentForm.value;
    let tempId = tempStudent.id;
    console.log(tempStudent);
    for (const student of StudentDAO.studentDAO) {
      if (tempId < student.id) {
        tempId = student.id + 1;
      }
      tempStudent.id = tempId;
    }
    console.log('tempStudent = ' + tempStudent);
    this.studentService.saveStudent(this.createStudentForm.value);
    this.router.navigateByUrl('list-student').then(r => '');
  }
}
