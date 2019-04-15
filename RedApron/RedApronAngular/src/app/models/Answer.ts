import {Enquiry} from './Enquiry'
import {Staff} from './Staff'

export class Answer {
    answerId: number
    text : string
    enquiry : Enquiry
    staff : Staff
    
   
    constructor(answerId?: number
        ,text ?: string){
        this.answerId = answerId
        this.text = text
    }
    
}