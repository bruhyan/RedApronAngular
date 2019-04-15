import {Answer} from './Answer';
import { User } from './User';


export class Enquiry {
    enquiryId : number;
    text: string;
   created : Date
   updated : Date
   subscriber : User
    answer : Answer
   

    constructor( enquiryId ?: number
        ,text?: string
       ,created ?: Date
       ,updated ?: Date) {
       this.enquiryId = enquiryId
       this.created = created
       this.updated = updated
    }
}