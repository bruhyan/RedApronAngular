import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { Review } from 'src/app/models/Review';
import { ReviewService } from '../../service/review.service';

@Component({
  selector: 'app-review-creation',
  templateUrl: './review-creation.component.html',
  styleUrls: ['./review-creation.component.css']
})
export class ReviewCreationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ReviewCreationComponent>,
  private reviewService: ReviewService) { }

  currentUser;
  userId;
  firstName;
  lastName;

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.currentUser);
    console.log(this.currentUser);
    this.userId = this.currentUser.subscriberId;
    this.firstName = this.currentUser.firstName;
    this.lastName = this.currentUser.lastName;
  }

  ctrl = new FormControl(null, Validators.required);

  createReview(body, number){
    console.log("body: " + body)
    console.log("control value: " + number)

    var review: Review = new Review(undefined, body, number, new Date(), this.currentUser);
    console.log("Review: " + review)
    this.reviewService.createReview(review).subscribe(res => {
      console.log(res)
    })
    
  }

}
