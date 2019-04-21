import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../service/recipe.service';
import { SharingServiceService } from '../../../service/sharing-service.service';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe-main-view',
  templateUrl: './recipe-main-view.component.html',
  styleUrls: ['./recipe-main-view.component.css']
})
export class RecipeMainViewComponent implements OnInit {

  recipe : Recipe;
  num : number;

  constructor(private recipeService: RecipeService,public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.recipe = this.sharingService.getRecipeData().recipe
    this.num = this.recipe.recipeId
    console.log("PASSING IN DATA FROM RECIPE MAIN VIEW : " + this.num)
  }

  
}

