import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../service/enquiry.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EnquiryAnswerComponent } from '../user-enquiries/enquiry-answer/enquiry-answer.component';
import { AnswerService } from '../../service/answer.service'

@Component({
  selector: 'app-user-enquiries',
  templateUrl: './user-enquiries.component.html',
  styleUrls: ['./user-enquiries.component.css']
})
export class UserEnquiriesComponent implements OnInit {

  constructor(private answerService: AnswerService, private enquiryService: EnquiryService, public dialog: MatDialog) { }
  userId;
  firstName;
  lastName;
  currentUser;
  enquiries;
  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.currentUser);
    console.log(this.currentUser);
    this.userId = this.currentUser.subscriberId;
    this.firstName = this.currentUser.firstName;
    this.lastName = this.currentUser.lastName;
    this.retrieveEnquiriesByUser(this.userId);
  }

  retrieveEnquiriesByUser(id: String) {
    this.enquiryService.retrieveEnquiries(id).subscribe(res => {

      this.enquiries = res.enquiryEntities;

      for (let enquiry of this.enquiries) {
        let date = new Date(enquiry.created)
        var currentDate = date.getDate();
        var currentMonth = date.getMonth() + 1; //Months are zero based
        var currentYear = date.getFullYear();
        enquiry.created = (currentDate + "-" + currentMonth + "-" + currentYear);
        this.retrieveAnswerByEnquiryId(enquiry.enquiryId).then(data =>{
          enquiry.answerData = data.answer.text;
          enquiry.staffName = data.answer.staff.firstName + " " + data.answer.staff.lastName;
          
          console.log()
        });
;
      }

    })
  }

  retrieveAnswerByEnquiryId(id: String) {
    return new Promise(resolve => {
      this.answerService.retrieveAnswerByEnquiryId(id).subscribe(res => {
        resolve(res);
      })
    })

  }
  openDialog(answer: String, staffName: String): void {
    const dialogRef = this.dialog.open(EnquiryAnswerComponent, {
      data: {
        name: this.firstName + " " + this.lastName,
        staffName: staffName,
        answer: answer
      }
    });



  }
}
