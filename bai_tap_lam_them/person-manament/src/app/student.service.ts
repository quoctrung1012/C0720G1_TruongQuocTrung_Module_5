import {Injectable} from '@angular/core';
import {IStudent} from './model/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: IStudent[] = [];

  constructor() {
  }

  findAll() {
    return this.students;
  }

  findById(id): IStudent {
    return this.students.find(
      (student) => student.id === id
    );
  }

  saveStudent(student: IStudent) {
    this.students.push(student);
  }

  updateStudent(editStudent: IStudent) {
    for (const student of this.students) {
      if (student.id === editStudent.id) {
        student.name = editStudent.name;
        student.phone = editStudent.phone;
        student.address = editStudent.address;
        student.birthday = editStudent.birthday;
        student.scores = editStudent.scores;
        student.avatar = editStudent.avatar;
        student.avatarSize = editStudent.avatarSize;
      }
    }
  }
}
