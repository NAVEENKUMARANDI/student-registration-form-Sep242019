import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

import { StudentServices } from '../../service/studentservice';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {


  // Dependency Injection 
  constructor(private fb: FormBuilder, private studentService: StudentServices) { }

  studentProfileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.studentProfileForm.value);
    this.studentService.saveStudent(this.studentProfileForm.value);
  }

  get firstName() {
    return this.studentProfileForm.get('firstName');
  }
  get lastName() {
    return this.studentProfileForm.get('lastName');
  }  

}
