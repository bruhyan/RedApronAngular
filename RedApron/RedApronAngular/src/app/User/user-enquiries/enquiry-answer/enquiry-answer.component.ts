import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-enquiry-answer',
  templateUrl: './enquiry-answer.component.html',
  styleUrls: ['./enquiry-answer.component.css']
})
export class EnquiryAnswerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EnquiryAnswerComponent>) { }

  ngOnInit() {
    console.log(this.data);
  }


}
