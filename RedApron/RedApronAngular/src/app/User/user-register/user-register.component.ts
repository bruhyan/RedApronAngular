import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    phoneNumber: ''
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.model.firstName);
  }

}
