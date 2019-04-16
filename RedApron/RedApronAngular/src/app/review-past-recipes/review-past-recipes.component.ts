import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionPlanService } from '../service/subscription-plan.service';
import { RecipeService } from '../service/recipe.service'
import { Recipe } from '../models/Recipe';


@Component({
  selector: 'app-review-past-recipes',
  templateUrl: './review-past-recipes.component.html',
  styleUrls: ['./review-past-recipes.component.css']
})
export class ReviewPastRecipesComponent implements OnInit {

  @Input() num: number
  recipe;

  constructor(private subscriptionPlanService: SubscriptionPlanService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.retrieveRecipe();
    console.log("SubscriptionPlan: " + this.num)
  }

  retrieveRecipe(){
    this.recipeService.getRecipeByRecipeId(this.num).subscribe(res => {
      this.recipe = res.recipe
      console.log("recipe in past recipes: "+this.recipe);
    });
  }

}
