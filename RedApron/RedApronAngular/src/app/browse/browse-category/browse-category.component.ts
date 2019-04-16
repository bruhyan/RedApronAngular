import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'

@Component({
  selector: 'app-browse-category',
  templateUrl: './browse-category.component.html',
  styleUrls: ['./browse-category.component.css']
})
export class BrowseCategoryComponent implements OnInit {

  categories: Category[] = [];
  recipes: Recipe[] = [];
  
  healthy: Category[] = [];
  quick: Category[] = [];
  vegetarian: Category[] =[];
  baking: Category[] =[];
  signature: Category[] = [];
  seasonal: Category[] = [];

  randomNums: number[] = [];
  randomRecipes: Recipe[] = [];

  constructor(private categoryService: CategoryService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.retrieveAllCategories();
    this.retrieveAllRecipes();


  }

  retrieveAllCategories() {
    this.categoryService.getCategories().subscribe(res => {
      console.log(res);
      this.categories = res.categoryEntities
      this.filterCategories();
    },
      error => {
        console.log("****** browse category category retrieval " + error);
      }
    ) 
  }

  retrieveAllRecipes() {
    this.recipeService.getRecipes().subscribe(res => {
      console.log(res);
      this.recipes = res.recipeEntities
      this.randomPicks();
    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    ) 
  }

  filterCategories(){
    for(let cat of this.categories) {
      if (cat.name.split(" ")[0] == "Healthy") {
        this.healthy.push(cat)
      } else if (cat.name.split(" ")[0] == "Quick") {
        this.quick.push(cat)
      }else if (cat.name.split(" ")[0] == "Vegetarian") {
        this.vegetarian.push(cat)
      }else if (cat.name.split(" ")[0] == "Baking") {
        this.baking.push(cat)
      }else if (cat.name.split(" ")[0] == "Signature") {
        this.signature.push(cat)
      }else if (cat.name.split(" ")[0] == "Seasonal") {
        this.seasonal.push(cat)
      }
    }

  }

randomPicks(){
  for (var i = 0; i < 4; i++) {
    var num = this.getRandomInt(this.recipes.length)
    while(this.randomNums.includes(this.recipes[num].recipeId)){
      num = this.getRandomInt(this.recipes.length)
    }

    this.randomNums.push(this.recipes[num].recipeId)
    this.randomRecipes.push(this.recipes[num])
  }
  console.log(this.randomNums);
  console.log(this.randomRecipes)
}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
