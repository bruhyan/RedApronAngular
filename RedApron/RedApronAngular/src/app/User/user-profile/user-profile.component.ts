import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { UserService } from '../../service/user.service'
import { SessionService } from '../../service/session.service'
// import { ModalDirective } from 'ng'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser;
  currentUserId;
  userDetails = {
    firstName : '',
    lastName: '',
    email : '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    phoneNumber: ''

  }
  userToUpdate : User;
  closeResult : string;

  constructor(private modalService : NgbModal, private userService : UserService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.currentUser);
    this.currentUserId = this.currentUser.subscriberId;
    console.log("current user "+this.currentUser)
    console.log("userId: "+sessionStorage.password);
    this.userDetails.firstName = this.currentUser.firstName,
    this.userDetails.lastName = this.currentUser.lastName,
    this.userDetails.email = this.currentUser.email,
    this.userDetails.addressLine1= this.currentUser.addressLine1,
    this.userDetails.addressLine2= this.currentUser.addressLine2,
    this.userDetails.postalCode= this.currentUser.postalCode,
    this.userDetails.phoneNumber = this.currentUser.phoneNumber
    
  }

  open(content) {
    this.userToUpdate = new User();
    console.log("new user for update "+this.userToUpdate)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateUser(form : NgForm) {
    this.userToUpdate.subscriberId = this.currentUserId
    this.userToUpdate.password = sessionStorage.password
    console.log(this.userToUpdate);
    this.userService.updateUser(this.userToUpdate).subscribe(
      resp => { 
        console.log('ok')
        
    },
      error => { }
    )
    document.getElementById('close').click();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


