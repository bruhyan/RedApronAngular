import {SubscriptionPlan} from './SubscriptionPlan'
import {Enquiry} from './Enquiry'
import {Review} from './Review';


export class Staff {
    email: string;
    firstName: string;
    lastName: string;
    staffId : number;
    // password: string;
   

    constructor(email?: string, firstName?: string, lastName?: string, staffId?: number) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.staffId = staffId;
    }
}