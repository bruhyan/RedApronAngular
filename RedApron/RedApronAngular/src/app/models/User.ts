import {SubscriptionPlan} from './SubscriptionPlan'
import {Enquiry} from './Enquiry'
import {Review} from './Review';


export class User {
    addressLine1: string;
    addressLine2: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    postalCode: string;
    userId : number;
    // password: string;
    subscriptionPlans : SubscriptionPlan[]
    reviews : Review[]
    enquiries : Enquiry[]

    constructor(addressLine1?: string, addressLine2?: string, email?: string, firstName?: string, lastName?: string, phoneNumber?: string, postalCode?: string, userId?: number) {
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.postalCode = postalCode;
        this.userId = userId;
    }
}