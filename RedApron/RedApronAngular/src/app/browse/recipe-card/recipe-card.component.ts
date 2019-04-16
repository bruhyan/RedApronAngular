import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() num: number
  recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.retrieveRecipe();
  }

  retrieveRecipe() {
    this.recipeService.getRecipeByRecipeId(this.num).subscribe(res => {
      this.recipe = res.recipe
      console.log(this.recipe);

    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    ) 
  }
}
