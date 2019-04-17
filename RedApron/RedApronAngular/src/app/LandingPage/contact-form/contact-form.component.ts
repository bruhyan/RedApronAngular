import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { Enquiry } from 'src/app/models/Enquiry';
import { User } from 'src/app/models/User';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private sessionService: SessionService, private enquiryService: EnquiryService) { }

  enquiryText
  isLoggedIn;

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem("isLogin");
    console.log(this.isLoggedIn);
  }

  getIsLoggedIn(){

    return this.isLoggedIn;

  }

  createEnquiry(body) {
    var currentUser = JSON.parse(sessionStorage.currentUser)
    var enquiry: Enquiry = new Enquiry(undefined, body, new Date(), undefined, currentUser);
    this.enquiryService.createEnquiry(enquiry).subscribe(res => {

      console.log(res);

    })
  }
}
