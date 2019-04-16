import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../../service/recipe.service';
import { SharingServiceService } from '../../../service/sharing-service.service';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe-main-content',
  templateUrl: './recipe-main-content.component.html',
  styleUrls: ['./recipe-main-content.component.css']
})
export class RecipeMainContentComponent implements OnInit {
  @Input() num: number
  recipe
  calories
  time
  shortDescription
  sen : string = ""

  constructor(private recipeService: RecipeService,public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.retrieveRecipe();
  }

  retrieveRecipe() {
    console.log("RECIPE MAIN CONTENT retrieving recipe id : " + this.num)
    this.recipeService.getRecipeByRecipeId(this.num).subscribe(res => {
      this.recipe = res.recipe
      console.log(this.recipe);
      this.shortDescription = this.recipe.shortDescription.split(" ")
      this.calories = this.shortDescription[this.shortDescription.length-1]
      this.time = this.shortDescription[this.shortDescription.length-2]
      for (var i = 0; i < this.shortDescription.length-2 ; i++ ){
       this.sen = this.sen.concat(this.shortDescription[i] + " ")
      }
    },
      error => {
        console.log("****** recipe main content recipe retrieval " + error);
      }
    ) 
  }
}