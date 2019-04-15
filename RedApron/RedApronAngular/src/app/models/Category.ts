import { Recipe} from './recipe';
import {SubscriptionPlan} from './subscriptionPlan';

export class Category {
    categoryId: number
    name : string
    price: number
    isAvailable: boolean
    recipes: Recipe[]
    subscriptionPlans: SubscriptionPlan[]    
   
    constructor(categoryId?:number,name?: string, price?: number ,isAvailable?: boolean){
        this.categoryId = categoryId;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    
}