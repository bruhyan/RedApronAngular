import {Recipe} from './Recipe';
import { User } from './User';


export class Review {
    reviewId: number
    text : string
    rating: number
    date: Date
    subscriber : User
    recipe : Recipe
   
    constructor(reviewId?: number
        , text ?: string
        , rating?: number
        , date?: Date){
        this.reviewId = reviewId
        this.text = text
        this.rating = rating
        this.date = date
    }
    
}