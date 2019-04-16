import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private enquiryService: EnquiryService) { }

  ngOnInit() {
  }

  createEnquiry(){

  }
}
