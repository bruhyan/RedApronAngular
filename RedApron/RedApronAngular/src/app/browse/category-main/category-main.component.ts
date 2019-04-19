import { Component, OnInit } from '@angular/core';
import { SharingServiceService } from '../../service/sharing-service.service';
import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'
import { Review } from '../../models/Review'

import { ReviewService } from '../../service/review.service';

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
  message
  cat: string
  filter
  ratingFilter
  reviews: Review[] = []
  sum: number = 0
  constructor(private reviewService: ReviewService, private categoryService: CategoryService, private recipeService: RecipeService, public sharingService: SharingServiceService) { }

  ngOnInit() {
    console.log("*********** PARENT MAIN : is not from child " + this.sharingService.getData().isGeneral)
    if (this.sharingService.getData().isGeneral) {
      this.categoriesBrowsing = this.sharingService.getData().categories
      var temp = this.categoriesBrowsing[0].name.split(" ")[0]
      if (temp == "Healthy") {
        this.categoryBrowsing = "Healthy"
        this.cat = "cat1border.png"
      } else if (temp == "Quick") {
        this.categoryBrowsing = "Quick & Easy"
        this.cat = "cat2border.png"
      } else if (temp == "Vegetarian") {
        this.categoryBrowsing = "Vegetarian"
        this.cat = "cat3border.png"
      } else if (temp == "Baking") {
        this.categoryBrowsing = "Baking"
        this.cat = "cat4border.png"

      } else if (temp == "Signature") {
        this.categoryBrowsing = "Signature"
        this.cat = "cat5border.png"

      } else if (temp == "Seasonal") {
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

  retrieveRecipesForCategory(categoryId) {
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

  receiveFilter($event) {
    this.filter = $event
    this.recipeNums = []
    console.log("*********** PARENT MAIN got FILTER INFO : " + this.filter)
    this.doFilterForIngredient()
  }

  receiveRatingFilter($event) {
    this.recipeNums = []
    this.ratingFilter = $event
    console.log("*********** PARENT MAIN got RATING FILTER INFO : " + this.ratingFilter)
    this.doFilterForRating()
  }

  retrieveCategory(categoryId) {
    this.categoryService.getCategoryByCategoryId(categoryId).subscribe(res => {
      console.log(res);
      this.categoryBrowsing = res.category.name


      var temp = res.category.name.split(" ")[0]
      if (temp == "Healthy") {
        this.cat = "cat1border.png"
      } else if (temp == "Quick") {
        this.cat = "cat2border.png"
      } else if (temp == "Vegetarian") {
        this.cat = "cat3border.png"
      } else if (temp == "Baking") {
        this.cat = "cat4border.png"
      } else if (temp == "Signature") {
        this.cat = "cat5border.png"
      } else if (temp == "Seasonal") {
        this.cat = "cat6border.png"
      }
    },
      error => {
        console.log("****** category side bar " + error);
      }
    )
  }

  doFilterForRating() {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res.recipeEntities
      for (let recipe of this.recipes) {
        this.retrieveAllReviewsByRecipeId(recipe.recipeId)

      }
    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    )
  }

  doFilterForIngredient() {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res.recipeEntities
      for (let recipe of this.recipes) {
        for (let ingredient of this.filter) {
          if (recipe.ingredients.includes(ingredient)) {
            this.recipeNums.push(recipe.recipeId)
            break
          }
        }

      }
    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    )
  }

  retrieveAllReviewsByRecipeId(id) {
    this.reviewService.retrieveReviewsByRecipeId(id).subscribe(res => {
      this.reviews = res.reviewEntities;
      console.log("Reviews: " + this.reviews)
      if (this.reviews.length == 0) {
        console.log("RECIPE " + id + " NO REVIEWS")
        this.recipeNums.push(id)
      } else {
        this.sum = 0
        var count: number = 0
        for (let review of this.reviews) {
          console.log("RECIPE " + id + " HAS REVIEWS")
          this.sum = this.sum + review.rating
          count = count + 1
        }
        console.log(this.sum)
        var avg = this.sum / count
        if (this.ratingFilter <= avg) {
          this.recipeNums.push(id)
        } else {
          console.log("RECIPE REJECTED")
        }
      }
    }
    )
  };

}
