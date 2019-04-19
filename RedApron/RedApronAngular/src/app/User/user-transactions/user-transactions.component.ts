import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service'
import { SessionService } from '../../service/session.service'
import { Transaction } from '../../models/Transaction'

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent implements OnInit {
  currentUser;
  currentUserId : number;
  transactions : Transaction[];
  errorMessage;
  i = 1;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.currentUser);
    this.currentUserId = this.currentUser.subscriberId;
    console.log("currentUserId "+this.currentUserId)
    this.retrieveTransactionByUserId();
  }

  retrieveTransactionByUserId() {
    this.transactionService.retrieveTransactionByUserId(this.currentUserId).subscribe(
      res => {
        this.transactions = res.transactions;
        console.log((this.transactions))},
      error => {
        this.errorMessage = error;
        console.log(this.errorMessage)
        // this.showFailure();
      }
    )

  }

}
