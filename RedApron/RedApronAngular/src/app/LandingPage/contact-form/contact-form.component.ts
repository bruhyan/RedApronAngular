import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { Enquiry } from 'src/app/models/Enquiry';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private enquiryService: EnquiryService) { }

  enquiryText

  ngOnInit() {
  }

  createEnquiry(){
    var enquiry:Enquiry = new Enquiry(undefined,this.enquiryText,new Date());
    this.enquiryService.createEnquiry(enquiry);
  }
}
