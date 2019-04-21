import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'
import { send } from 'q';
import { SharingServiceService } from '../../service/sharing-service.service';
import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() num: number
  recipe
  calories
  time
  shortDescription
  sen: string = ""
  categories: Category[] = [];
  categoryNames: string = ""
  category: Category


  constructor(private categoryService: CategoryService, private recipeService: RecipeService, public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.retrieveRecipe();
  }

  retrieveRecipe() {
    this.recipeService.getRecipeByRecipeId(this.num).subscribe(res => {
      this.recipe = res.recipe
      console.log(this.recipe);
      this.retrieveCategoriesForRecipe(this.recipe.recipeId)
      this.shortDescription = this.recipe.shortDescription.split(" ")
      this.calories = this.shortDescription[this.shortDescription.length - 1]
      this.time = this.shortDescription[this.shortDescription.length - 2]
      for (var i = 0; i < this.shortDescription.length - 2; i++) {
        this.sen = this.sen.concat(this.shortDescription[i] + " ")
      }
    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    )
  }

  setRecipe() {
    this.sharingService.setRecipeData({ "recipe": this.recipe });
    console.log("RECIPE SET IN CARD : " + this.sharingService.getRecipeData().recipe.name)
  }

  retrieveCategoriesForRecipe(recipeId: number) {
    this.categoryService.getCategoriesByRecipeId(recipeId).subscribe(res => {
      this.categories = res.categoryEntities
      for (var i = 0; i < this.categories.length; i++) {
        if (i == this.categories.length-1) {
          this.categoryNames = this.categoryNames.concat(this.categories[i].name)
            return
        }
        this.categoryNames = this.categoryNames.concat(this.categories[i].name + ', ')
      }
    },
      error => {
        console.log("****** browse category recipe category retrieval " + error);
      }
    )
  }

  
}
