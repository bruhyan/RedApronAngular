import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser : User;
  userDetails = {
    firstName : '',
    lastName: '',
    email : '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    phoneNumber: ''

  }

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.currentUser);
    //console.log(this.currentUser.email);
    this.userDetails.firstName = this.currentUser.firstName,
    this.userDetails.lastName = this.currentUser.lastName,
    this.userDetails.email = this.currentUser.email,
    this.userDetails.addressLine1= this.currentUser.addressLine1,
    this.userDetails.addressLine2= this.currentUser.addressLine2,
    this.userDetails.postalCode= this.currentUser.postalCode,
    this.userDetails.phoneNumber = this.currentUser.phoneNumber
  }

}
