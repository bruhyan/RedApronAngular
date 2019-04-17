import { Component, OnInit, ViewChild } from '@angular/core';
// import { StripeToken, StripeSource } from "stripe-angular";
import { StripeService, Elements, Element as StripeElement, ElementsOptions, StripeCardComponent } from "ngx-stripe";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpHeaders } from '@angular/common/http';
import { TransactionService } from '../../../service/transaction.service';
import { Transaction } from 'src/app/models/Transaction';
import { PaymentType } from 'src/app/models/PaymentType'
import { SubscriptionPlan } from 'src/app/models/SubscriptionPlan';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) stripeCard: StripeCardComponent;
  elements: Elements;
  card: StripeElement;
  stripeTest: FormGroup;
  constructor(private fb: FormBuilder,
    private stripeService: StripeService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements()
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }
  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          console.log(result.token);
          var subscriptionPlan: SubscriptionPlan = new SubscriptionPlan(undefined, new Date());
          //multiple transaction made for each subscription plan
          var transaction: Transaction = new Transaction(undefined, 500.00, new Date(), PaymentType.MASTER);
          this.transactionService.createTransaction(transaction).subscribe(res => {

            console.log(res);
      
          })

        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

}


  // extraData = {
  //   "name": "Pereira Yip"
  // }
  // paymentData = {

  //   type: 'card',
  //   amount: 100,
  //   currency: 'sgd',
  //   owner: {
  //     name: 'Pereira Yip',
  //   },
  //   redirect: {
  //     return_url: 'https://shop.example.com/crtA6B28E1',

  //   }
  // }


  // token;


  // charges = {
  //   amount: 100,
  //   currency: 'sgd',
  //   description: 'Example charge',
  //   source: this.token,
  // }

  // makePayment(stripeCard){
  //   console.log(stripeCard);
  //   stripeCard.stripe.charges.create({
  //     amount: 1000,
  //     currency: "sgd",
  //     source: "tok_visa",
  //   })
  // }


  // onStripeInvalid(error: Error) {
  //   console.log('Validation Error', error)
  // }

  // setStripeToken(token: StripeToken) {
  //   this.token = token;
  //   console.log('Stripe token', token)
  // }

  // setStripeSource(source: StripeSource) {
  //   console.log('Stripe source', source)
  // }

  // onStripeError(error: Error) {
  //   console.error('Stripe error', error)
  // }