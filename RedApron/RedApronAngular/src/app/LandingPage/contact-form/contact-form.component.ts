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

  createEnquiry(body){
    console.log(body);
    var enquiry:Enquiry = new Enquiry(undefined,body,new Date());
    console.log(enquiry);
    this.enquiryService.createEnquiry(enquiry).subscribe(res=>{

      console.log(res);

    })
  }
}
