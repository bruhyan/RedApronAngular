import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // user : User;
  errorMessage : string;

  constructor(private userService : UserService) { }

  model = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.model.email, this.model.password);
  }

  getUser() {
    this.userService.getUser().subscribe(
      response => {
        // this.user = response.subscriber;
      },
      error => {
        this.errorMessage = "HTTP" + error.status + ": "+ error.error.message;
      }
    );
  }

}
