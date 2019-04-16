import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../service/user.service';
import { SessionService } from '../../service/session.service';
import {SubscriptionPlan} from '../../models/SubscriptionPlan';
import {Enquiry} from '../../models/Enquiry';
import {Review} from '../../models/Review';
import {User} from '../../user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  newUser: User;
  reviews: Review[];
  enquiries: Enquiry[];
  subscriptionPlans: SubscriptionPlan[];

  constructor(
    public sessionService: SessionService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private toastr : ToastrService

  ) {
    this.newUser = new User();

   }

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
    
    console.log(this.model.lastName);
    console.log(this.newUser.firstName);
    this.submitted = true;
    if(form.valid) {
      this.userService.createUser(this.newUser).subscribe(
        response => {
          let newUserReturn : User = response.subscriber;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New user "+ newUserReturn.email + " created successfully";
          this.showSuccess(this.message);
          form.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.showFailure();
        }
      )
    }
  }

  showSuccess(message : string) {
    this.toastr.success(message, 'Registration Success!');
  }

  showFailure() {
    this.toastr.error('Something went wrong :(', 'Registration Failed')
  }

}
