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
    preference: string
    numOfWeeks: number
    numOfRecipes: number
    status: SubscriptionPlanStatus
    deliveryDay: DeliveryDay
    category: Category
    transaction: Transaction
    recipes: Recipe[]
    subscriber: User

    constructor(subscriptionPlanId?: number, startDate?: Date, endDate?: Date, preference?: string
        , numOfWeeks?: number
        , numOfRecipes?: number
        , status?: SubscriptionPlanStatus
        , deliveryDay?: DeliveryDay) {
        this.subscriptionPlanId = subscriptionPlanId
        this.startDate = startDate
        this.endDate = endDate
        this.preference = preference
        this.numOfWeeks = numOfWeeks
        this.numOfRecipes = numOfRecipes
        this.status = status
        this.deliveryDay = deliveryDay
    }

}