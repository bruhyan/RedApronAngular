import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'
import { send } from 'q';
import { SharingServiceService } from '../../service/sharing-service.service';


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
  sen : string = ""

  constructor(private recipeService: RecipeService,public sharingService: SharingServiceService) { }

  ngOnInit() {
    this.retrieveRecipe();
  }

  retrieveRecipe() {
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
        console.log("****** browse category recipe retrieval " + error);
      }
    ) 
  }

  setRecipe(){
    this.sharingService.setData({"recipe": this.recipe});
    console.log("RECIPE SET IN CARD : " + this.sharingService.getData().recipe.name)
  }
}
