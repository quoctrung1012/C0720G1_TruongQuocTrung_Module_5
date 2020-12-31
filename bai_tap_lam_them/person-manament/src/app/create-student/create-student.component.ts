import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  createStudentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createStudentForm = this.formBuilder.group({
      id: [''],
      name: [''],
      phone: [''],
      address: [''],
      birthday: [''],
      scores: [''],
      avatar: [''],
      avatarSize: ['']
    });
  }

}
