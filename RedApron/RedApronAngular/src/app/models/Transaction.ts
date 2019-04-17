import { Category } from './Category';
import {Step} from './Step';
import {Review} from './Review';
import {PaymentType} from './PaymentType';
import { SubscriptionPlan } from './SubscriptionPlan';


export class Transaction {
    transactionId: number
    amount : number
    paymentDate: Date
    paymentType : PaymentType
    subscriptionPlan : SubscriptionPlan
   
    constructor(transactionId?: number
        ,amount?: number
        ,paymentDate?: Date
        ,paymentType?: PaymentType
        ,subscriptionPlan?: SubscriptionPlan){
        this.transactionId = transactionId
        this.amount = amount
        this.paymentDate = paymentDate
        this.paymentType = paymentType
        this.subscriptionPlan = subscriptionPlan
    }
    
}