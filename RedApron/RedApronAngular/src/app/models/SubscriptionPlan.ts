import { Recipe } from './Recipe';
import { DeliveryDay } from './DeliveryDay';
import { Category } from './Category';
import { Transaction } from './Transaction';
import { SubscriptionPlanStatus } from './SubscriptionPlanStatus';
import { User } from './User'

export class SubscriptionPlan {
    subscriptionPlanId: number
    startDate: Date
    endDate: Date
    preferences: string
    numOfWeeks: number
    numOfRecipes: number
    status: SubscriptionPlanStatus
    deliveryDay: DeliveryDay
    category: Category
    transaction: Transaction
    subscriber: User
  

    constructor(subscriptionPlanId?: number, startDate?: Date, endDate?: Date, preferences?: string
        , numOfWeeks?: number
        , numOfRecipes?: number
        , status?: SubscriptionPlanStatus
        , deliveryDay?: DeliveryDay
        , category? : Category
        , subscriber? : User) {
        this.subscriptionPlanId = subscriptionPlanId
        this.startDate = startDate
        this.endDate = endDate
        this.preferences = preferences
        this.numOfWeeks = numOfWeeks
        this.numOfRecipes = numOfRecipes
        this.status = status
        this.deliveryDay = deliveryDay
        this.category = category,
        this.subscriber = subscriber
    }

}