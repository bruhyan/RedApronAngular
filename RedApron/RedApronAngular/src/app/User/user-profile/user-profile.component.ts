import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails = {
    name : 'Aiken Dueet',
    email : 'yo@gmail.com',
    addressLine1: 'Kent Ridge',
    addressLine2: 'Some corner',
    postalCode: '321123'

  }

  constructor() { }

  ngOnInit() {
  }

}
