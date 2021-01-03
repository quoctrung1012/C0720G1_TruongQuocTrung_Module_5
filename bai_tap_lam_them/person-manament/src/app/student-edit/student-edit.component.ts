import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  student: IStudent;
  sub: Subscription;
  editStudentForm: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService,
              private router: Router,
              private formBuilder: FormBuilder) {
    if (this.student != null) {
      this.editStudentForm.setValue(this.student);
    }
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.student = this.studentService.findById(id);
    });
    this.editStudentForm = this.formBuilder.group({
      id: [this.student.id, [Validators.required, Validators.pattern(/^\d/)]],
      name: [this.student.name, [Validators.required]],
      phone: [this.student.phone, [Validators.required, Validators.pattern(/^(090|091)\d{7}$/)]],
      address: [this.student.address, [Validators.required]],
      birthday: [this.student.birthday, [Validators.required]],
      scores: [this.student.scores, [Validators.required]],
      avatar: [this.student.avatar],
      avatarSize: [this.student.avatarSize]
    });
  }

  edit(editStudentForm: FormGroup) {
    this.studentService.updateStudent(this.editStudentForm.value);
    this.router.navigateByUrl('list-student').then(r => '');
  }
}
