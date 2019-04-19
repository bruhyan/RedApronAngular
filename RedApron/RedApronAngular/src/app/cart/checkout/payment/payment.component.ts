import { Component, OnInit, ViewChild } from '@angular/core';
// import { StripeToken, StripeSource } from "stripe-angular";
import { StripeService, Elements, Element as StripeElement, ElementsOptions, StripeCardComponent } from "ngx-stripe";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpHeaders } from '@angular/common/http';
import { TransactionService } from '../../../service/transaction.service';
import { Transaction } from 'src/app/models/Transaction';
import { PaymentType } from 'src/app/models/PaymentType'
import { SubscriptionPlan } from 'src/app/models/SubscriptionPlan';
import { SubscriptionPlanService } from 'src/app/service/subscription-plan.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/Category';
import { User } from 'src/app/models/User';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) stripeCard: StripeCardComponent;
  elements: Elements;
  card: StripeElement;
  stripeForm: FormGroup;
  cart;
  stripeError;
  loadingSpinner = false;
  constructor(private router: Router, private sessionService: SessionService, private dialogRef: MatDialogRef<PaymentComponent>, private toastr: ToastrService, private fb: FormBuilder,
    private stripeService: StripeService, private categoryService: CategoryService, private transactionService: TransactionService, private subscriptionPlanService: SubscriptionPlanService) { }

  ngOnInit() {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    this.stripeForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements()
      .subscribe(elements => {
        this.elements = elements;
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
          this.card.mount('#stripe-card-details');
        }
      });
  }
  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  clearCart() {
    this.sessionService.clearCart();
    this.router.navigate(['/home']);
  }

  buy() {
    this.loadingSpinner = true;
    const name = this.stripeForm.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          console.log(result.token);
          var subscriptionPlanPersisted = false;
          var count = 0;
          for (let cartItem of this.cart) {
            count++;
            this.categoryService.getCategoryByCategoryId(cartItem.category.categoryId).subscribe(res => {
              let category: Category = res.category;
              let user = JSON.parse(sessionStorage.getItem("currentUser"));
              var subscriptionPlan: SubscriptionPlan = new SubscriptionPlan(undefined, new Date(cartItem.startDate), cartItem.endDate, cartItem.preference, cartItem.numOfWeeks, cartItem.numOfRecipes, cartItem.status, cartItem.deliveryDay);
              this.subscriptionPlanService.createSubscriptionPlan(subscriptionPlan, category, user).subscribe(res => {


                //Error here, attempted to solve this for too long, found a way to bypass for now..

              })



            })

            if (count == this.cart.length) {
              subscriptionPlanPersisted = true;
            }


          }

          //current method will retrieve old data.
          if (subscriptionPlanPersisted) {
            (async () => {
              this.toastr.info("Confirming payment...");

              await this.wait(2000);


              this.subscriptionPlanService.retrieveLatestSubscriptionPlan(this.cart.length).subscribe(res => {
                console.log(res);
                console.log(sessionStorage.getItem("planPrices"));
                var planPrices = JSON.parse(sessionStorage.getItem("planPrices"));
                var i = 0;
                for (let sub of res.subscriptionPlan) {

                  var transaction: Transaction = new Transaction(undefined, parseFloat(planPrices[i]), new Date(), PaymentType.MASTER, sub);
                  this.transactionService.createTransaction(transaction).subscribe(res => {
                    console.log(res);
                  })
                  i++;
                }

                this.toastr.success("Payment was successful!");

                this.dialogRef.close();


                this.toastr.success("Returning you home.");
                (async () => {

                  await this.wait(500);
                  this.router.navigate(["/home"]);
                })();



              })

            })();


          }

          // var subscriptionPlan: SubscriptionPlan = new SubscriptionPlan(undefined, new Date());
          //multiple transaction made for each subscription plan




          // this.transactionService.createTransaction(transaction).subscribe(res => {

          //   console.log(res);

          // })

        } else if (result.error) {
          // Error creating the token
          this.stripeError = result.error.message;
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