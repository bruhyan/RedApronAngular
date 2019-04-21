import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharingServiceService } from '../../service/sharing-service.service';
import { CategoryService } from '../../service/category.service'
import { Category } from '../../models/Category'
import { RecipeService } from '../../service/recipe.service'
import { Recipe } from '../../models/Recipe'
import { Review } from '../../models/Review'

import { ReviewService } from '../../service/review.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.css']
})
export class CategoryMainComponent implements OnInit {

  categoriesBrowsing: Category[] = [];
  categoryBrowsing: string;
  recipeNums: number[] = [];

  recipeNumsIngredient: number[] = [];
  recipeNumsRating: number[] = [];
  recipeNumsDuration: number[] = [];
  recipeNumsCalorie: number[] = [];

  recipes: Recipe[] = [];
  message
  cat: string
  filter = []
  ratingFilter = 0
  durationFilter = []
  calorieFilter = []
  activeFilters = []
  reviews: Review[] = []
  sum: number = 0
  keys = ["Rating", "Duration", "Calories"];
  sortType: string
  refresh

  @Output() messageEvent = new EventEmitter()


  constructor(private reviewService: ReviewService, private categoryService: CategoryService, private recipeService: RecipeService, public sharingService: SharingServiceService) { }

  ngOnInit() {
    console.log("*********** PARENT MAIN : is not from child " + this.sharingService.getData().isGeneral)
    if (this.sharingService.getData().isGeneral) {
      console.log("REFRESHED OR ENTERED")
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
    } else { // handle old data on back
      console.log("BACKKKKKKKK")
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

  receiveNewPlan($event) {
    this.refresh = $event
    this.sendNewPlan()
  }

  sendNewPlan() {
    console.log("EMITTING " + this.refresh)
    this.messageEvent.emit(this.refresh)
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
    this.recipeNums = []
    this.recipeNumsIngredient = []
    this.filter = $event
    this.categoryBrowsing = "Filter Results"
    console.log("*********** PARENT MAIN got FILTER INFO : " + this.filter)
    this.doFilterForIngredientTEST()
  }

  receiveRatingFilter($event) {
    this.recipeNums = []
    this.recipeNumsRating = []
    this.categoryBrowsing = "Filter Results"
    this.ratingFilter = $event
    console.log("*********** PARENT MAIN got RATING FILTER INFO : " + this.ratingFilter)
    this.doFilterForRating()
  }

  receiveDurationFilter($event) {
    this.recipeNums = []
    this.recipeNumsDuration = []
    this.categoryBrowsing = "Filter Results"
    this.durationFilter = $event
    console.log("*********** PARENT MAIN got DURATION FILTER INFO : " + this.durationFilter)
    this.doFilterForDuration()
  }

  receiveCalorieFilter($event) {
    this.recipeNums = []
    this.recipeNumsCalorie = []
    this.categoryBrowsing = "Filter Results"
    this.calorieFilter = $event
    console.log("*********** PARENT MAIN got CALORIE FILTER INFO : " + this.durationFilter)
    this.doFilterForCalorie()
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

  doFilterForDuration() {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res.recipeEntities
      var start = this.durationFilter[0]
      var end = this.durationFilter[1]
      for (let recipe of this.recipes) {
        var temp = recipe.shortDescription.split(" ")
        var time = temp[temp.length - 2]
        console.log("TIME : " + time)
        if (time <= end && time >= start) {
          this.recipeNumsDuration.push(recipe.recipeId)
        }
      }
      console.log(this.recipeNumsDuration)
      this.determineActiveFilters()
    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    )
  }

  doFilterForCalorie() {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res.recipeEntities
      var min = this.calorieFilter[0]
      var max = this.calorieFilter[1]
      for (let recipe of this.recipes) {
        var temp = recipe.shortDescription.split(" ")
        var calorie = temp[temp.length - 1]
        console.log("CALORIE : " + calorie)
        if (calorie <= max && calorie >= min) {
          this.recipeNumsCalorie.push(recipe.recipeId)
        }
      }
      console.log(this.recipeNumsCalorie)
      this.determineActiveFilters()

    },
      error => {
        console.log("****** browse category recipe retrieval " + error);
      }
    )
  }

  doFilterForIngredientTEST() {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res.recipeEntities
      for (let recipe of this.recipes) {
        var allInside = true
        for (let ingredient of this.filter) {
          if (!recipe.ingredients.includes(ingredient)) {
            allInside = false
            break
          }
        }
        if (allInside == true) {
          this.recipeNumsIngredient.push(recipe.recipeId)
          console.log("all ingredients")
        }
      }
      console.log(this.recipeNumsIngredient)
      this.determineActiveFilters()
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
        this.recipeNumsRating.push(id)
      } else {
        console.log("RECIPE REJECTED")
      }
      this.determineActiveFilters()
    }
    )
  };

  determineActiveFilters() {
    this.activeFilters = []
    if (this.filter.length != 0) { //filter for ingredients 
      this.activeFilters.push("ingredient")
    }

    if (this.ratingFilter != 0) { //filter for ratings
      this.activeFilters.push("rating")
    }

    if (this.durationFilter.length != 0) { //filter for duration
      this.activeFilters.push("duration")
    }

    if (this.calorieFilter.length != 0) { //filter for calories
      this.activeFilters.push("calories")
    }
    console.log("ACTIVE FILTERS : " + this.activeFilters)
    this.retrieveFilteredResults()

  }

  retrieveFilteredResults() {
    console.log("FILTERING")
    var temp = []
    var emptyResult = false
    if (this.activeFilters.includes("ingredient")) {
      if (this.recipeNumsIngredient.length == 0) {
        emptyResult = true
        console.log("TEMP EMPTY")

      } else {
        temp.push(this.recipeNumsIngredient)
        console.log("TEMP NOT EMPTY in")
      }
    }

    if (this.activeFilters.includes("rating")) {
      if (this.recipeNumsRating.length == 0) {
        emptyResult = true
        console.log("TEMP EMPTY")
      } else {
        temp.push(this.recipeNumsRating)
        console.log("TEMP NOT EMPTY ra")
      }
    }

    if (this.activeFilters.includes("duration")) {
      if (this.recipeNumsDuration.length == 0) {
        emptyResult = true
        console.log("TEMP EMPTY")
      } else {
        temp.push(this.recipeNumsDuration)
        console.log("TEMP NOT EMPTY du")
      }
    }

    if (this.activeFilters.includes("calories")) {
      if (this.recipeNumsCalorie.length == 0) {
        emptyResult = true
        console.log("TEMP EMPTY")
      } else {
        temp.concat(this.recipeNumsCalorie)
        console.log("TEMP NOT EMPTY ca")
      }
    }

    if (emptyResult) {
      this.recipeNums = []
    } else if (this.activeFilters.length == 1) {
      this.recipeNums = temp[0]
    }
    else {
      for (var i = 0; i < this.activeFilters.length; i++) {
        this.recipeNums = temp[i].filter(e1 => temp[i + 1].includes(e1))
      }
    }
    console.log("recipe nums " + this.recipeNums)
  }

//   doSort() {
//     var arr = []
//     if (this.sortType == "Rating") {
//       for (let id of this.recipeNums) {
//         id : value= id.valueOf()
//         this.reviewService.retrieveReviewsByRecipeId(id).subscribe(res => {
//           this.reviews = res.reviewEntities;
//           console.log("Reviews: " + this.reviews)

//           this.sum = 0
//           var count: number = 0
//           for (let review of this.reviews) {
//             console.log("RECIPE " + id + " HAS REVIEWS")
//             this.sum = this.sum + review.rating
//             count = count + 1
//           }
//           console.log(this.sum)
//           var avg = this.sum / count
//           arr.push({ id: id, val: avg })
//         }
//         )
//       };
//     }
//   }
// }

}
