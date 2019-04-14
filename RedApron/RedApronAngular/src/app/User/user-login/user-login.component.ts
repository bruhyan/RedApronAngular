import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // user : User;
  errorMessage : string;

  constructor(private userService : UserService) { }

  ngOnInit() {
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
