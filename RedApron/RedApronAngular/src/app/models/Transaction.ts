import { Category } from './Category';
import {Step} from './Step';
import {Review} from './Review';
import {PaymentType} from './PaymentType';


export class Transaction {
    transactionId: number
    amount : number
    paymentDate: Date
    paymentType : PaymentType
    image : string
    isAvailable : boolean
    steps : Step[]
    categories : Category[]
    reviews : Review[]
   
    constructor(transactionId?: number
        ,amount?: number
        ,paymentDate?: Date
        ,paymentType?: PaymentType
        ,image?: string
        ,isAvailable?: boolean){
        this.transactionId = transactionId
        this.amount = amount
        this.paymentDate = paymentDate
        this.paymentType = paymentType
        this.image = image
        this.isAvailable = isAvailable
    }
    
}