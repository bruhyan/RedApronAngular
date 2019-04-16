import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { Enquiry } from 'src/app/models/Enquiry';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private enquiryService: EnquiryService) { }

  enquiryText
  isLoggedIn;

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem("isLogin");
  }

  createEnquiry(body) {
    var currentUser = JSON.parse(sessionStorage.currentUser)
    var enquiry: Enquiry = new Enquiry(undefined, body, new Date(), undefined, currentUser);
    console.log(enquiry);
    this.enquiryService.createEnquiry(enquiry).subscribe(res => {

      console.log(res);

    })
  }
}
