import { Category } from './Category';
import { Step } from './Step';
import { Review } from './Review';


export class Recipe {
    recipeId: number
    name : string
    ingredients: string
    shortDescription : string
    image : string
    isAvailable : boolean
    steps : Step[]
    categories : Category[]
    reviews : Review[]
   
    constructor(recipeId?:number,name?: string, ingredients?:string,shortDescription?:string,image?:string,isAvailable?:boolean){
        this.recipeId =  recipeId
        this.name = name
        this.ingredients = ingredients
        this.shortDescription = shortDescription
        this.image = image
        this.isAvailable = isAvailable
    }
    
}