import { Component, OnInit } from '@angular/core';
import { SharingServiceService } from '../../service/sharing-service.service';
import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.css']
})
export class CategoryMainComponent implements OnInit {

  categoriesBrowsing: Category[] = [];
  categoryBrowsing: string;
  recipeNums: number[] = [];
  recipes: Recipe[] = [];
  message:number
  cat: string


  constructor(private categoryService: CategoryService, private recipeService: RecipeService,public sharingService: SharingServiceService) { }

  ngOnInit() {
    console.log("*********** PARENT MAIN : is not from child " + this.sharingService.getData().isGeneral )
    if (this.sharingService.getData().isGeneral) {
      this.categoriesBrowsing = this.sharingService.getData().categories
      var temp = this.categoriesBrowsing[0].name.split(" ")[0]
      if (temp == "Healthy") {
        this.categoryBrowsing = "Healthy"
        this.cat = "cat1border.png"
      } else if (temp == "Quick") {
        this.categoryBrowsing = "Quick & Easy"
        this.cat = "cat2border.png"
      }else if (temp == "Vegetarian") {
        this.categoryBrowsing = "Vegetarian"
        this.cat = "cat3border.png"
      }else if (temp == "Baking") {
        this.categoryBrowsing = "Baking"
        this.cat = "cat4border.png"

      }else if (temp == "Signature") {
        this.categoryBrowsing = "Signature"
        this.cat = "cat5border.png"

      }else if (temp == "Seasonal") {
        this.categoryBrowsing = "Seasonal Specials"
        this.cat = "cat6border.png"
      }
      console.log(this.cat)
      for (let cat of this.categoriesBrowsing) {
        console.log("cat Id browsing : " + cat.categoryId)
        this.retrieveRecipesForCategory(cat.categoryId);
      }
    } else { // handle old data on refresh
      console.log("REFRESHEDDDDDD")
      this.categoriesBrowsing = this.sharingService.getData().categories
      this.retrieveCategory(this.categoriesBrowsing[0].categoryId)
      this.retrieveRecipesForCategory(this.categoriesBrowsing[0].categoryId)

    }
      
      
    

  }

  retrieveRecipesForCategory(categoryId:number) {
    this.recipeService.getRecipesByCategoryId(categoryId).subscribe(res => {
      console.log(res);
      this.recipes = res.recipeEntities
      for (let recipe of this.recipes) {
        this.recipeNums.push(recipe.recipeId)
      }
    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    ) 
  }

  receiveMessage($event) {
    this.message = $event
    this.recipeNums = []
    this.categoryBrowsing = ""
    this.retrieveCategory(this.message)
    console.log("*********** PARENT MAIN got cat id : " + this.message)
    this.retrieveRecipesForCategory(this.message)
  }

  retrieveCategory(categoryId:number) {
    this.categoryService.getCategoryByCategoryId(categoryId).subscribe(res => {
      console.log(res);
      this.categoryBrowsing = res.category.name


      var temp = res.category.name.split(" ")[0]
      if (temp == "Healthy") {
        this.cat = "cat1border.png"
      } else if (temp == "Quick") {
        this.cat = "cat2border.png"
      }else if (temp == "Vegetarian") {
        this.cat = "cat3border.png"
      }else if (temp == "Baking") {
        this.cat = "cat4border.png"
      }else if (temp == "Signature") {
        this.cat = "cat5border.png"
      }else if (temp == "Seasonal") {
        this.cat = "cat6border.png"
      }
    },
      error => {
        console.log("****** category side bar " + error);
      }
    ) 
  }

}
