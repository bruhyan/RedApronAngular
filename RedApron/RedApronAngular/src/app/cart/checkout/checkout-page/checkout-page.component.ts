import { Component, OnInit } from '@angular/core';
import { StripeScriptTag } from "stripe-angular"
import { PaymentComponent } from '../payment/payment.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  // private testKey: string = "pk_test_9zdHAOReAhqDbLyt9YCHdwsR00XR1sIOST"
  // constructor(public StripeScriptTag: StripeScriptTag, public dialog: MatDialog) {
  //   this.StripeScriptTag.setPublishableKey(this.testKey)
  // }

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(PaymentComponent, { width: '30%', height: '50%' });

  }
}
