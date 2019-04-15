import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { User } from '../../user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user : User;
  errorMessage : string;

  constructor(private userService : UserService,
              private router : Router,
              public sessionService : SessionService,
              private activatedRoute: ActivatedRoute) {

               }

  model = {
    email: '',
    password: '',
    
  }

  loginError: boolean;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.model.email, this.model.password);
    this.userLogin();
  }

  userLogin() {
    this.sessionService.setUserEmail(this.model.email);
    this.sessionService.setPassword(this.model.password);
    this.userService.userLogin(this.model.email, this.model.password).subscribe(
      response => {
        let user:User = response.subscriber;
        if(user != null) {
          this.sessionService.setIsLogin(true);
          this.sessionService.setCurrentUser(user);
          this.loginError = false;
          this.router.navigate(["/home"]);
        }else {
          this.loginError = true;
        }
        console.log(JSON.parse(sessionStorage.currentUser))
      },
      error => {
        this.loginError = true;
        this.errorMessage = error
      }
    );
  }

}
