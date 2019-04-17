import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionPlanService } from '../service/subscription-plan.service';
import { RecipeService } from '../service/recipe.service'
import { Recipe } from '../models/Recipe';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ReviewCreationComponent } from '../review-past-recipes/review-creation/review-creation.component';


@Component({
  selector: 'app-review-past-recipes',
  templateUrl: './review-past-recipes.component.html',
  styleUrls: ['./review-past-recipes.component.css']
})
export class ReviewPastRecipesComponent implements OnInit {

  @Input() num: number

  recipe;

  constructor(private subscriptionPlanService: SubscriptionPlanService, private recipeService: RecipeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.retrieveRecipe();
  }

  retrieveRecipe(){
    this.recipeService.getRecipeByRecipeId(this.num).subscribe(res => {
      this.recipe = res.recipe
      console.log("recipe in past recipes: "+this.recipe);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewCreationComponent);
  }

}
